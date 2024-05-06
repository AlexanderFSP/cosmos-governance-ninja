import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  standalone: true,
  selector: 'app-unsupported-screen-size',
  templateUrl: './unsupported screen size.component.html',
  styleUrl: './unsupported screen size.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent]
})
export class UnsupportedScreenSizeComponent {}
