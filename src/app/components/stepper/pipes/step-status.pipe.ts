import { Pipe, PipeTransform } from '@angular/core';
import { StepStatus } from '../components/step/models/step-status.model';

@Pipe({
  standalone: true,
  name: 'stepStatus',
})
export class StepStatusPipe implements PipeTransform {
  public transform(stepIdx: number, currentStepIdx: number): StepStatus {
    return stepIdx === currentStepIdx
      ? StepStatus.IN_PROGRESS
      : stepIdx < currentStepIdx
      ? StepStatus.COMPLETED
      : StepStatus.PENDING;
  }
}
