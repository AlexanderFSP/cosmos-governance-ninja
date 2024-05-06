import { Injectable, Signal, signal, TemplateRef } from '@angular/core';

/**
 * A "crutch" for rendering content, the position of which must be absolute relative to the `.card`, and not the `ng-scrollbar`.
 *
 * TODO: (AlexanderFSP) Find a better solution one day
 *
 * @see AppComponent
 */
@Injectable({
  providedIn: 'root'
})
export class AbsoluteCardContentService {
  public readonly tplRef: Signal<TemplateRef<unknown> | null>;

  private readonly _tplRef = signal<TemplateRef<unknown> | null>(null);

  constructor() {
    this.tplRef = this._tplRef.asReadonly();
  }

  public setTplRef(tplRef: TemplateRef<unknown> | null): void {
    this._tplRef.set(tplRef);
  }
}
