import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';
import { takeUntil } from 'rxjs';

import { SignErrorDialogRef } from './models/sign-error-dialog-ref.model';
import { SignErrorComponent } from './sign-error.component';

@Injectable()
export class SignErrorService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  public open(message: string): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });
    const signErrorDialogRef = new SignErrorDialogRef(message, overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: SignErrorDialogRef,
          useValue: signErrorDialogRef
        }
      ]
    });

    overlayRef.attach(new ComponentPortal(SignErrorComponent, undefined, injector));

    overlayRef
      .backdropClick()
      .pipe(takeUntil(overlayRef.detachments()))
      .subscribe(() => signErrorDialogRef.close());
  }
}
