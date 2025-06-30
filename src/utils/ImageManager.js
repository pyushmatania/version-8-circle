/**
 * Image Manager for Circles App
 * Handles fetching official movie posters and album covers from various APIs
 */

class ImageManager {
  constructor() {
    // API Keys (store these in environment variables)
    this.tmdbApiKey = process.env.VITE_TMDB_API_KEY;
    this.spotifyClientId = process.env.VITE_SPOTIFY_CLIENT_ID;
    this.spotifyClientSecret = process.env.VITE_SPOTIFY_CLIENT_SECRET;
    this.omdbApiKey = process.env.VITE_OMDB_API_KEY;
    
    // Cache for API responses
    this.cache = new Map();
    this.spotifyToken = null;
    this.spotifyTokenExpiry = null;
  }

  /**
   * Get movie poster from TMDb
   */
  async getMoviePoster(title, year = null, language = 'en') {
    const cacheKey = `movie_${title}_${year}_${language}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      const query = year ? `${title} y:${year}` : title;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.tmdbApiKey}&query=${encodeURIComponent(query)}&language=${language}`
      );
      
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        const posterUrl = movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : null;
        
        const result = {
          url: posterUrl,
          title: movie.title,
          year: movie.release_date ? new Date(movie.release_date).getFullYear() : null,
          tmdbId: movie.id,
          attribution: 'The Movie Database (TMDb)',
          copyright: '© The Movie Database (TMDb)'
        };
        
        this.cache.set(cacheKey, result);
        return result;
      }
    } catch (error) {
      console.error('TMDb API error:', error);
    }
    
    return null;
  }

  /**
   * Get album cover from Spotify
   */
  async getAlbumCover(artist, album) {
    const cacheKey = `album_${artist}_${album}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // Get Spotify access token if needed
      await this.ensureSpotifyToken();
      
      const query = `artist:${artist} album:${album}`;
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album&limit=1`,
        {
          headers: {
            'Authorization': `Bearer ${this.spotifyToken}`
          }
        }
      );
      
      const data = await response.json();
      
      if (data.albums && data.albums.items.length > 0) {
        const albumData = data.albums.items[0];
        const coverUrl = albumData.images && albumData.images.length > 0 
          ? albumData.images[0].url 
          : null;
        
        const result = {
          url: coverUrl,
          artist: albumData.artists[0]?.name,
          album: albumData.name,
          spotifyId: albumData.id,
          attribution: 'Spotify',
          copyright: '© Spotify AB'
        };
        
        this.cache.set(cacheKey, result);
        return result;
      }
    } catch (error) {
      console.error('Spotify API error:', error);
    }
    
    return null;
  }

  /**
   * Ensure we have a valid Spotify access token
   */
  async ensureSpotifyToken() {
    if (this.spotifyToken && this.spotifyTokenExpiry > Date.now()) {
      return;
    }

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${this.spotifyClientId}:${this.spotifyClientSecret}`)}`
        },
        body: 'grant_type=client_credentials'
      });
      
      const data = await response.json();
      this.spotifyToken = data.access_token;
      this.spotifyTokenExpiry = Date.now() + (data.expires_in * 1000);
    } catch (error) {
      console.error('Spotify token error:', error);
      throw error;
    }
  }

  /**
   * Fallback to OMDb for movie posters
   */
  async getMoviePosterOMDb(title, year = null) {
    try {
      const params = new URLSearchParams({
        apikey: this.omdbApiKey,
        t: title,
        type: 'movie'
      });
      
      if (year) {
        params.append('y', year);
      }
      
      const response = await fetch(`https://www.omdbapi.com/?${params}`);
      const data = await response.json();
      
      if (data.Response === 'True' && data.Poster !== 'N/A') {
        return {
          url: data.Poster,
          title: data.Title,
          year: data.Year,
          imdbId: data.imdbID,
          attribution: 'OMDb API',
          copyright: '© OMDb API'
        };
      }
    } catch (error) {
      console.error('OMDb API error:', error);
    }
    
    return null;
  }

  /**
   * Get comprehensive movie data with poster
   */
  async getMovieData(title, year = null, language = 'en') {
    // Try TMDb first (better quality and free)
    let result = await this.getMoviePoster(title, year, language);
    
    // Fallback to OMDb if TMDb fails
    if (!result || !result.url) {
      result = await this.getMoviePosterOMDb(title, year);
    }
    
    return result;
  }

  /**
   * Batch process multiple movies/albums
   */
  async batchProcessImages(items) {
    const results = [];
    
    for (const item of items) {
      try {
        let imageData;
        
        if (item.type === 'movie' || item.type === 'film') {
          imageData = await this.getMovieData(item.title, item.year, item.language);
        } else if (item.type === 'music' || item.type === 'album') {
          imageData = await this.getAlbumCover(item.artist, item.album || item.title);
        }
        
        results.push({
          ...item,
          imageData: imageData || { url: item.fallbackImage }
        });
        
        // Rate limiting - wait between requests
        await this.delay(100);
        
      } catch (error) {
        console.error(`Error processing ${item.title}:`, error);
        results.push({
          ...item,
          imageData: { url: item.fallbackImage }
        });
      }
    }
    
    return results;
  }

  /**
   * Utility function for delays
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

export default ImageManager;