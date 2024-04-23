import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';

import { VoteDialogComponent } from './vote-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class VoteDialogService {
  private readonly overlay = inject(Overlay);

  public open(): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });

    overlayRef.attach(new ComponentPortal(VoteDialogComponent));
  }
}
