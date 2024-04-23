import { Directive, ElementRef, OnDestroy, OnInit, output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appWhenInViewport]'
})
export class WhenInViewportDirective implements OnInit, OnDestroy {
  public readonly appear = output();
  public readonly disappear = output();

  private io?: IntersectionObserver;

  constructor(private readonly hostElRef: ElementRef) {}

  public ngOnInit(): void {
    this.io = new IntersectionObserver(
      entries => entries.forEach(({ isIntersecting }) => (isIntersecting ? this.appear.emit() : this.disappear.emit())),
      { threshold: 1 }
    );

    this.io.observe(this.hostElRef.nativeElement);
  }

  public ngOnDestroy(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
}
