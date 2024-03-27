import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.page.html',
  styleUrls: ['./labs.page.scss'],
})
export class LabsPage implements OnInit {
  public parametroRecebido: string = '';
  public voltar: boolean = true;
  public titulo: string = ''; // Inicialize como vazio
  public texto: string = '';

  constructor(private route: ActivatedRoute) {}

  currentSlide: number = 0;
  images: { src: string, alt: string }[] = [];
  imageDirectory: string = 'assets/imgs/labs/';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.parametroRecebido = params['lab']; // Recupera o parâmetro passado
      this.titulo = 'F-' + this.parametroRecebido; // Defina o título após receber o parâmetro

      // Define a lista de imagens com base no parâmetro recebido
      if (this.parametroRecebido === '008') {
        this.loadImagesFromDirectory('F008/');
        this.texto = "As imagens acima apresentam o ambiente e todos os equipamentos tecnológicos dispostos no laboratório F-008, incluindo computadores, componentes de rede e projetores.";
      } else if(this.parametroRecebido == '102'){
        this.loadImagesFromDirectory('F102/');
        this.texto = "As imagens acima apresentam o ambiente e todos os equipamentos tecnológicos dispostos no laboratório F-102, incluindo computadores, componentes de rede e projetores.";
      } else{
        this.loadImagesFromDirectory('F108/');
        this.texto = "As imagens acima apresentam o ambiente e todos os equipamentos tecnológicos dispostos no laboratório F-108, incluindo computadores, componentes de rede e projetores.";
      }
    });

    setInterval(() => {
      this.moveSlide(1);
    }, 10000);
  }

  loadImagesFromDirectory(directory: string): void {
    // Supondo que você tenha uma lista de nomes de arquivos predefinida
    const imageNames: string[] = ['imagem1.JPG', 'imagem2.JPG', 'imagem3.JPG', 'imagem4.JPG'];

    // Construa a lista de imagens com base nos nomes de arquivo e diretório
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
