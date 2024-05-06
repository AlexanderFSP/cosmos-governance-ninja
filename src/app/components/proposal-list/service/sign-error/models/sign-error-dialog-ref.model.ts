import { OverlayRef } from '@angular/cdk/overlay';

export class SignErrorDialogRef {
  constructor(public readonly message: string, private readonly overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
