import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
  public readonly tplRef$: Observable<TemplateRef<unknown> | null>;

  private readonly _tplRef$ = new BehaviorSubject<TemplateRef<unknown> | null>(null);

  constructor() {
    this.tplRef$ = this._tplRef$.asObservable();
  }

  public setTplRef(tplRef: TemplateRef<unknown> | null): void {
    this._tplRef$.next(tplRef);
  }
}
