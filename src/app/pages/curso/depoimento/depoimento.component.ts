import { Component, Input, OnInit } from '@angular/core';
import { IDepoimento } from 'src/app/models/IDepoimento.model';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss'],
})
export class DepoimentoComponent implements OnInit {

  @Input() public id!: string;

  public depoimento: IDepoimento = {
    autor: " ",
    depoimento: []
  };

  constructor() { }

  ngOnInit() {
    this.carregaDepoimento();
  }

  private carregaDepoimento(): void {
    switch (this.id) {
      case 'ciencia-da-computacao':
        this.depoimento.autor = 'Vinicius Santos Andrade';
        this.depoimento.depoimento = [
          '"Minha jornada na Ciência da Computação começou cedo, aos 16 anos, com o curso técnico em Informática. Desde então, me apaixonei por essa área em constante evolução. A graduação em Redes de Computadores e o mestrado e doutorado em Ciência da Computação me proporcionaram uma base sólida para explorar diferentes áreas, como desenvolvimento Web e Mobile, pesquisa científica e docência.',
          "Atualmente, tenho o privilégio de compartilhar meu conhecimento e experiência como professor universitário. Lecionar nos cursos de Ciência da Computação e Tecnologia em Jogos Digitais é extremamente gratificante, pois posso contribuir para a formação de novos profissionais e acompanhar de perto o entusiasmo deles por essa área.",
          "O mercado de trabalho em Ciência da Computação é extremamente aquecido e oferece um leque enorme de oportunidades. As empresas buscam profissionais qualificados e com conhecimento em áreas como desenvolvimento de software, inteligência artificial, ciência de dados, segurança da informação, entre outras.",
          "Observo que a demanda por profissionais com habilidades em áreas como desenvolvimento web e mobile, aprendizado de máquina e análise de dados continua crescendo. A busca por soluções inovadoras e a crescente digitalização das empresas impulsionam esse mercado, abrindo portas para os recém-formados e para aqueles que buscam novos desafios.",
          'Minha experiência na área me mostra que a Ciência da Computação é uma área vibrante e cheia de oportunidades. Para aqueles que desejam seguir essa carreira, meu conselho é: sejam curiosos, busquem aprendizado contínuo e se dediquem para desenvolver habilidades relevantes para o mercado. O futuro é promissor para aqueles que se dedicam a essa área fascinante!"'
        ];
        break;
      case 'jogos-digitais':
        this.depoimento.autor = 'Me. Robson Fernandes da Silva'
        //this.depoimento.depoimento = 'Depoimento';
        break;
    }
  }
}
