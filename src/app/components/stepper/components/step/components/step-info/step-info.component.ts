import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { StepStatus } from '../../models/step-status.model';

const STATUS_TITLE: Record<StepStatus, string> = {
  [StepStatus.COMPLETED]: 'Completed',
  [StepStatus.IN_PROGRESS]: 'In Progress',
  [StepStatus.PENDING]: 'Pending'
};

@Component({
  standalone: true,
  selector: 'app-step-info',
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
})
export class StepInfoComponent {
  public readonly number = input.required<number>();
  public readonly title = input.required<string>();
  public readonly status = input.required<StepStatus>();

  protected readonly statusTitle = STATUS_TITLE;
}
