import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

export type ButtonAppearance = 'primary' | 'secondary';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SvgIconComponent]
})
export class ButtonComponent {
  public readonly appearance = input<ButtonAppearance>('primary');
  public readonly loading = input<boolean | null>(false);
  public readonly disabled = input(false);
}
