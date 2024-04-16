import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { StepComponent } from './components/step/step.component';
import { StepStatusPipe } from './pipes/step-status.pipe';

@Component({
  standalone: true,
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepComponent, StepStatusPipe]
})
export class StepperComponent {
  /** Starts from 0 */
  public readonly currentStepIdx = input.required<number>();
  public readonly steps = input.required<string[]>();
}
