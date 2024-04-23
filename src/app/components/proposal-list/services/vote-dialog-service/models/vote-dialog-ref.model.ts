import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

import { IProposal } from '../../../../../models/proposals/proposal.model';
import { ProposalVoteOption } from '../../../../../models/proposals/proposal-vote-option.model';

export class VoteDialogRef {
  public readonly result$: Observable<ProposalVoteOption | undefined>;

  private readonly _result$ = new Subject<ProposalVoteOption | undefined>();

  constructor(public readonly proposal: IProposal, private readonly overlayRef: OverlayRef) {
    this.result$ = this._result$.asObservable();
  }

  public close(option?: ProposalVoteOption): void {
    this._result$.next(option);

    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
