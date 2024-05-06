import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { ButtonComponent } from '../../../button/button.component';
import { SignErrorDialogRef } from './models/sign-error-dialog-ref.model';

@Component({
  standalone: true,
  selector: 'app-sign-error',
  templateUrl: './sign-error.component.html',
  styleUrl: './sign-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent, ButtonComponent]
})
export class SignErrorComponent {
  protected readonly signErrorDialogRef = inject(SignErrorDialogRef);
}
