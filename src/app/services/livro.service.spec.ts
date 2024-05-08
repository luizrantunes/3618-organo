import { Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { LivroService } from "./livro.service"

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(() => {
    service = new LivroService();
  })

  it('deveria ser criado', () => {
    expect(service).toBeTruthy();
  })

  it('deveria adicionar um novo livro', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: {id: 'romance', value: 'Romance'},
      dataLeitura: '2024-04-19',
      classificacao: 5
    };

    service.adicionarLivro(novoLivro);
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    expect(livrosPorGenero).toContain(novoLivro);
  });

  it('deveria recuperar corretamente os livros por gênero', () => {
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance')
    expect(livrosPorGenero).toEqual(livrosEsperados);
  })
})
