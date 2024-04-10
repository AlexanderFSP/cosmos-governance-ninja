import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface IStep {
  title: string;
}

@Component({
  standalone: true,
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  /** Starts from 0 */
  public readonly currentStepIdx = input.required<number>();
  public readonly steps = input.required<IStep[]>();
}
