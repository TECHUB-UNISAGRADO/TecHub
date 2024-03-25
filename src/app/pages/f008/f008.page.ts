import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f008',
  templateUrl: './f008.page.html',
  styleUrls: ['./f008.page.scss'],
})
export class F008Page implements OnInit {
  public voltar: boolean = true;
  public titulo: string = "F-008";
  constructor() { }

  currentSlide: number = 0;
  images: { src: string, alt: string }[] = [
    { src: 'assets/imgs/cursos/jogos-digitais.jpg', alt: 'Imagem 1' },
    { src: 'assets/imgs/cursos/ciencia-da-computacao.jpg', alt: 'Imagem 2' },
  ];

  ngOnInit() {
    setInterval(() => {
      this.moveSlide(1);
    }, 10000);
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
