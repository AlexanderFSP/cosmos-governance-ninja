import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';
import { filter, Observable, takeUntil } from 'rxjs';

import { ProposalVoteOption } from '../../../../models/proposals/proposal-vote-option.model';
import { VoteDialogRef } from './models/vote-dialog-ref.model';
import { IVoteDialogComponentData, VoteDialogComponent } from './vote-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class VoteDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  public open(data: IVoteDialogComponentData): Observable<ProposalVoteOption | null> {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });
    const voteDialogRef = new VoteDialogRef(data, overlayRef);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: VoteDialogRef,
          useValue: voteDialogRef
        }
      ]
    });

    overlayRef.attach(new ComponentPortal(VoteDialogComponent, undefined, injector));

    overlayRef
      .backdropClick()
      .pipe(takeUntil(overlayRef.detachments()))
      .subscribe(() => voteDialogRef.close());

    return voteDialogRef.result$.pipe(filter(result => result !== undefined)) as Observable<ProposalVoteOption | null>;
  }
}
