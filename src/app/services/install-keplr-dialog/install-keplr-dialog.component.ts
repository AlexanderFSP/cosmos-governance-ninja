import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { ButtonComponent } from '../../components/button/button.component';
import { InstallKeplrDialogRef } from './models/install-keplr-dialog-ref.model';

@Component({
  standalone: true,
  selector: 'app-install-keplr-dialog',
  templateUrl: './install-keplr-dialog.component.html',
  styleUrl: './install-keplr-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent, ButtonComponent]
})
export class InstallKeplrDialogComponent {
  protected readonly installKeplrDialogRef = inject(InstallKeplrDialogRef);
}
