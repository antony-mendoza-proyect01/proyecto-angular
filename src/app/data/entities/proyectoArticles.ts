
export class ProyectoArticles {
  source: ProyectoArticlesSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;


  constructor() {
    this.source = new ProyectoArticlesSource();
    this.author = '';
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.content = '';
  }
}
export class ProyectoArticlesSource {
  id?: any;
  name: string;

  constructor() {
    this.id = '';
    this.name = '';
  }
}
