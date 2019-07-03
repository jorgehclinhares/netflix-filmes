import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
  ) {
    this.registerBaseEndpoint(`${env.api.endpoint}/${env.api.version}/`);
    this.registerInterceptor();
  }

  getPopular(page: number) {
    const params = { page };
    return axios.get('movie/popular', { params });
  }

  getMovie(movieId: number) {
    return axios.get(`movie/${movieId}`, { params: {} });
  }

  private registerInterceptor() {
    axios.interceptors.request.use(
      config => {
        config.params.api_key = env.api.key;
        config.params.language = env.api.language;
        return config;
      }
    );
  }

  private registerBaseEndpoint(endpoint: string) {
    axios.defaults.baseURL = endpoint;
  }
}
