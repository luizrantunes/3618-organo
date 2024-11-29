import { ErroGeneroLiterario, LivroService } from "./livro.service";
import { GeneroLiterario, Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";

describe('LivroService', () => {
  let service: LivroService

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
      genero: {id: 'romance', value: 'Romance'},
      dataLeitura: '2024-11-29',
      classificacao: 5,
      imagem: 'http://example.com/imagem.jpg'
    };

    service.adicionarLivro(novoLivro);
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    expect(livrosPorGenero).toContain(novoLivro);
  })

  it('deveria recuperar corretamente os livros por gênero', () => {
    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance');
    expect(livrosPorGenero).toEqual(livrosEsperados);
  })

  it('deveria inicializar os gêneros corretamente', () => {
    const generosEsperados: GeneroLiterario[] = [
      { id: 'romance', value: 'Romance' },
      { id: 'misterio', value: 'Mistério' },
      { id: 'fantasia', value: 'Fantasia' },
      { id: 'ficcao-cientifica', value: 'Ficção Científica' },
      { id: 'tecnicos', value: 'Técnicos' },
    ];

    expect(service.generos).toEqual(generosEsperados);
  })

  it ('deveria lançar um erro ao tentar cadastrar um livro com gênero desconhecido', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      genero: {id: 'nao-existe', value: 'Não Existe'},
      dataLeitura: '2024-11-29',
      classificacao: 5,
      imagem: 'http://example.com/imagem.jpg'
    };

    expect(() => service.adicionarLivro(novoLivro)).toThrow(ErroGeneroLiterario);
  })
})
