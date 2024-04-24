import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, Subject } from 'rxjs';

import { ProposalVoteOption } from '../../../../../models/proposals/proposal-vote-option.model';
import { IVoteDialogComponentData } from '../vote-dialog.component';

export class VoteDialogRef {
  public readonly result$: Observable<ProposalVoteOption | null | undefined>;

  private readonly _result$ = new Subject<ProposalVoteOption | null | undefined>();

  constructor(public readonly data: IVoteDialogComponentData, private readonly overlayRef: OverlayRef) {
    this.result$ = this._result$.asObservable();
  }

  public close(option?: ProposalVoteOption | null): void {
    this._result$.next(option);

    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
