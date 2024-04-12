import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { StepStatus } from './models/step-status.model';
import { StepInfoComponent } from './components/step-info/step-info.component';

@Component({
  standalone: true,
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepInfoComponent],
})
export class StepComponent {
  @HostBinding('class.completed') protected get isCompleted(): boolean {
    return this.status() === StepStatus.COMPLETED;
  }

  @HostBinding('class.current') protected get isCurrent(): boolean {
    return this.status() === StepStatus.IN_PROGRESS;
  }

  public readonly status = input.required<StepStatus>();
  public readonly last = input.required<boolean>();
  public readonly title = input.required<string>();
  public readonly number = input.required<number>();

  protected readonly stepStatus = StepStatus;
}
