import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type ButtonAppearance = 'primary' | 'secondary';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
})
export class ButtonComponent {
  public readonly appearance = input<ButtonAppearance>('primary');

  public readonly click = output<void>();
}
