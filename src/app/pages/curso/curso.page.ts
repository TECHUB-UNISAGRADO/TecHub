import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from 'src/app/models/ICurso.model';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  public voltar: boolean = true;
  public titulo: string = "";

  public curso: ICurso = {
    id: "",
    nome: "",
    titulacao: "",
    modalidade: "",
    duracao: "",
    periodo: "",
    area: "",
    oCurso: [],
    voceComoProfissional: [],
    seuFuturo: [],
    telefone: "",
    email: ""
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.exibirCurso();
  }

  private exibirCurso(): void {
    this.curso.id = String(this.activatedRoute.snapshot.paramMap.get('id'));
    switch (this.curso.id) {
      case "ciencia-da-computacao":
        this.curso.nome = "Ciência da Computação";
        this.curso.titulacao = "Bacharel";
        this.curso.duracao = "4 anos";
        this.curso.oCurso = [
          "Desafios, tecnologias e mundo digital: o universo da computação é para pessoas antenadas nesses assuntos.",
          "O bacharelado em Ciência da Computação forma profissionais capazes não só de propor soluções de problemas, mas também de inovar e promover a evolução tecnológica da computação e da informática.",
          "A formação do estudante vai além da teoria, são utilizados métodos práticos em laboratórios altamente equipados para complementar os fundamentos apresentados em disciplinas, tais como Linguagens de programação, Realidade Virtual e Inteligência Artificial."
        ];
        this.curso.voceComoProfissional = [
          "A área de atuação de um profissional de Ciência da Computação abrange a Tecnologia da Informação, que é um mercado em crescimento na atualidade.",
          "O cientista da computação poderá atuar em projetos computacionais de hardware e software: projeto de infraestrutura de tecnologia, gerenciamento e bancos de dados, análise de sistemas, segurança da informação, organização de projetos, comunicação e transmissão de dados, indústria de entretenimento através da utilização de computação gráfica, multimídia e realidade virtual.",
          "E não para por aí! A carreira acadêmica é uma ótima opção para quem se interessa por pesquisa e pela docência."
        ];
        this.curso.seuFuturo = [
          "De olho no futuro e acompanhando as tendências na indústria da informação, pode-se dizer que o mercado de atuação está cada vez mais amplo e exigente, sendo a formação profissional cada vez mais essencial.",
          "Grande parte das empresas públicas e privadas utiliza algum tipo de tecnologia para desenvolver suas atividades, necessitando de criação, programação, análise, suporte e inovação."
        ];
        this.curso.telefone = "(14) 2107-7091";
        this.curso.email = "computacao@unisagrado.edu.br";
        break;
      case "jogos-digitais":
        this.curso.nome = "Jogos Digitais";
        this.curso.titulacao = "Tecnólogo";
        this.curso.duracao = "2 anos";
        this.curso.oCurso = [
          "O mundo gamer é a casa dos profissionais de Jogos Digitais! Inovação e criatividade são a porta de entrada para essa graduação, que forma profissionais com conhecimentos dinâmicos relacionados ao processo de desenvolvimento do entretenimento digital interativo.",
          "O curso promove sua capacitação de modo multidisciplinar para a sistematização no desenvolvimento e gestão de projetos, além da criação de roteiros e personagens, desenvolvimento gráfico, sonorização, motores de jogos (game engines), inteligência artificial e gestão de projetos de jogos, empreendedorismo, marketing e publicação de produtos finais.",
          "Durante o curso o estudante tem contato com disciplinas teóricas e práticas que possibilitam a obtenção das competências necessárias para uma atuação criativa e inovadora, como Programação, Criação de Roteiros: StoryBoard e Computação Gráfica."
        ];
        this.curso.voceComoProfissional = [
          "A principal área de atuação do profissional de Jogos Digitais é o entretenimento digital, em que é responsável pelo desenvolvimento de produtos tais como: jogos educativos, de marketing, de treinamento empresarial, na saúde, científicos, militares, dentre outros. Além disso, pode desempenhar funções como roteirista, artista gráfico, designer de áudio, testador de jogos, programador e redator. As possibilidades são inúmeras!"
        ];
        this.curso.seuFuturo = [
          "O Brasil é o principal mercado de jogos da América Latina, estando entre um dos maiores do mundo. Com isso, a demanda por profissionais qualificados para todo o processo de desenvolvimento, gestão e inovação do entretenimento no país é crescente.",
          "Além disso, outros setores como educação, setor de treinamento profissional e Marketing estão cada vez mais interessados nas habilidades do tecnólogo em Jogos Digitais. Profissionais antenados com as novidades do mercado, criativos e inovadores terão um futuro promissor."
        ];
        this.curso.telefone = "(14) 2107-7091";
        this.curso.email = "jogos@unisagrado.edu.br";
        break;
    }
    this.curso.modalidade = "Presencial";
    this.curso.periodo = "Noturno";
    this.curso.area = "Exatas";

    this.titulo = this.curso.nome;
  }
}
