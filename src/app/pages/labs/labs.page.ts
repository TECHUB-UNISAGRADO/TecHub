import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.page.html',
  styleUrls: ['./labs.page.scss'],
})
export class LabsPage implements OnInit, OnDestroy {

  public parametroRecebido: string = '';
  public voltar: boolean = true;
  public titulo: string = '';
  public texto: any = [];

  constructor(private route: ActivatedRoute) { }

  currentSlide: number = 0;
  images: { src: string, alt: string }[] = [];
  imageDirectory: string = 'assets/imgs/labs/'; //caminho padrão para as imagens dos labs
  intervalId: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parametroRecebido = params['id']; // Recupera o parâmetro passado
      this.titulo = 'F-' + this.parametroRecebido; // Defina o título após receber o parâmetro

      // Define a lista de imagens com base no parâmetro recebido
      if (this.parametroRecebido === '008') {
        this.loadImagesFromDirectory('F008/');
        this.texto = [
          "Um espaço dedicado ao desenvolvimento do conhecimento e da inovação tecnológica. Aqui, os alunos têm acesso a uma infraestrutura de ponta, com computadores de última geração dispostos de maneira estratégica para garantir um ambiente propício ao aprendizado e à pesquisa",
          "Nossos computadores são equipados com hardware de alto desempenho e software atualizado, proporcionando uma experiência de trabalho fluida e eficiente. Seja para programação, design gráfico, análise de dados ou qualquer outra atividade computacional",
          "Além disso, destacamos as duas ilhas de computadores, espaços especialmente designados para trabalhos em grupo e colaboração. Nestas ilhas, os alunos podem compartilhar ideias, discutir projetos e colaborar em tempo real, aproveitando ao máximo as possibilidades oferecidas pela tecnologia."
        ]
      } else if (this.parametroRecebido == '102') {
        this.loadImagesFromDirectory('F102/');
        this.texto = [
          "Em nosso laboratório, você encontrará uma série de computadores de alta qualidade, estrategicamente dispostos para facilitar o acesso e o trabalho dos alunos. Cada estação de trabalho foi cuidadosamente equipada com hardware de última geração e software atualizado, garantindo um ambiente propício para uma ampla gama de atividades, desde programação e design até análise de dados e simulações complexas.",
          "Além disso, destacamos a presença de um pequeno palco no laboratório, projetado para otimizar a experiência de ensino. Esse espaço permite que os alunos tenham uma visão clara do professor durante as aulas, facilitando a compreensão e a interação. Seja para demonstrações práticas, apresentações ou discussões em grupo, o palco oferece um ambiente adequado para o compartilhamento de conhecimento e experiência. Nossa abordagem centrada no aluno e no professor visa promover um ambiente de aprendizado estimulante e colaborativo."
        ]
      } else {
        this.loadImagesFromDirectory('F108/');
        this.texto = [
          "Nosso laboratório é equipado com uma ampla variedade de computadores de alto desempenho, estrategicamente dispostos para otimizar o desenvolvimento de jogos digitais. Cada estação de trabalho é projetada para oferecer o máximo de potência e eficiência, permitindo que os alunos explorem todo o seu potencial criativo.",
          "Além dos computadores dedicados ao desenvolvimento de jogos, também contamos com duas televisões dispostas no laboratório. Essas telas são utilizadas para testar e exibir os jogos em desenvolvimento, proporcionando uma experiência visual imersiva e realista. Os alunos têm a oportunidade de ver seus projetos ganharem vida em uma escala maior e compartilhar suas criações com os colegas."
        ]
      }

      // Configurar intervalo automático para mudar as imagens
      this.intervalId = setInterval(() => {
        this.moveSlide(1);
      }, 4000); // 4000 milissegundos = 4 segundos
    });
  }

  ngOnDestroy() {
    // Limpar o intervalo ao sair da page
    clearInterval(this.intervalId);
  }

  loadImagesFromDirectory(directory: string): void {
    // nomes padronizados por pasta para cada lab
    const imageNames: string[] = ['imagem1.JPG', 'imagem2.JPG', 'imagem3.JPG', 'imagem4.JPG'];

    this.images = imageNames.map(name => ({
      src: this.imageDirectory + directory + name,
      alt: name,
    }));
  }

  moveSlide(n: number): void {
    this.showSlide(this.currentSlide + n);
  }

  showSlide(n: number): void {
    const slides = document.querySelectorAll('.slide');
    (slides[this.currentSlide] as HTMLElement).classList.remove('active');
    this.currentSlide = (n + this.images.length) % this.images.length;
    (slides[this.currentSlide] as HTMLElement).classList.add('active');
  }
}
