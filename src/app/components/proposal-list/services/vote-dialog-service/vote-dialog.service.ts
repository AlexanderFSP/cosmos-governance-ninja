import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { inject, Injectable, Injector } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';

import { IProposal } from '../../../../models/proposals/proposal.model';
import { ProposalVoteOption } from '../../../../models/proposals/proposal-vote-option.model';
import { VoteDialogRef } from './models/vote-dialog-ref.model';
import { VoteDialogComponent } from './vote-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class VoteDialogService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);

  public open(proposal: IProposal): Observable<ProposalVoteOption | undefined> {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global().centerVertically().centerHorizontally()
    });
    const voteDialogRef = new VoteDialogRef(proposal, overlayRef);
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

    return voteDialogRef.result$;
  }
}
