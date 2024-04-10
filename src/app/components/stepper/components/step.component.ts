import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @HostBinding('class.completed') @Input() public completed?: boolean;
  @HostBinding('class.current') @Input() public current?: boolean;
  @Input() public last?: boolean;
  @Input() public title!: string;
}
