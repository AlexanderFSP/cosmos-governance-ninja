import { OverlayRef } from '@angular/cdk/overlay';

import { IProposal } from '../../../../../models/proposals/proposal.model';

export class VoteDialogRef {
  constructor(public readonly proposal: IProposal, private readonly overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
