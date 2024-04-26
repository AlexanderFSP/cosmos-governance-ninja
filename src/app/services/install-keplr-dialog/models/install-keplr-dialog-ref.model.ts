import { OverlayRef } from '@angular/cdk/overlay';

export class InstallKeplrDialogRef {
  constructor(private readonly overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.detach();
    this.overlayRef.dispose();
  }
}
