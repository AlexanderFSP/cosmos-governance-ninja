import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';
import { takeUntil } from 'rxjs';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { VoteDialogRef } from './models/vote-dialog-ref.model';
import { VoteDialogComponent } from './vote-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class VoteDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  public open(proposal: IProposal): void {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: VoteDialogRef,
          useValue: new VoteDialogRef(proposal, overlayRef)
        }
      ]
    });

    overlayRef.attach(new ComponentPortal(VoteDialogComponent, undefined, injector));

    overlayRef
      .backdropClick()
      .pipe(takeUntil(overlayRef.detachments()))
      .subscribe(() => overlayRef.dispose());
  }
}
