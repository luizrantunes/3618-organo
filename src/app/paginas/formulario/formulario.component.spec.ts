import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormularioComponent } from "./formulario.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { LivroService } from "../../services/livro.service";

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormularioComponent, ReactiveFormsModule, RouterTestingModule],
      providers: [LivroService, FormBuilder]
    })

    service = TestBed.inject(LivroService);
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('deveria inicializar o formulario com valores vazios', () => {
    expect(component.formulario.value).toEqual({
      titulo: '',
      autoria: '',
      imagem: '',
      genero: '',
      dataLeitura: '',
      classificacao: null
    });

    /*it('deveria adicionar um novo livro', () => {
      const novoLivro = {
        titulo: 'Novo Livro',
        autoria: 'Autor Desconhecido',
        genero: {id: 'romance', value: 'Romance'},
        dataLeitura: '2024-11-29',
        classificacao: 5,
        imagem: 'http://example.com/imagem.jpg'
      };

      const adicionarLivroSpy = jest.spyOn(service, 'adicionarLivro');
      component.formulario.setVale(novoLivro);
      component.adicionarLivro();

      expect(adicionarLivroSpy).toHaveBeenCalledWith({
        ...novoLivro,
        genero: component.generos.find(g => g.id === novoLivro.genero),
      })
    })*/
  })
})
