import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';
import { takeUntil } from 'rxjs';

import { InstallKeplrDialogComponent } from './install-keplr-dialog.component';
import { InstallKeplrDialogRef } from './models/install-keplr-dialog-ref.model';

@Injectable({
  providedIn: 'root'
})
export class InstallKeplrDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  public open(): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });
    const installKeplrDialogRef = new InstallKeplrDialogRef(overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: InstallKeplrDialogRef,
          useValue: installKeplrDialogRef
        }
      ]
    });

    overlayRef.attach(new ComponentPortal(InstallKeplrDialogComponent, undefined, injector));

    overlayRef
      .backdropClick()
      .pipe(takeUntil(overlayRef.detachments()))
      .subscribe(() => installKeplrDialogRef.close());
  }
}
