import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';

import { IChainInfoView } from '../../../../models/chain-info-view.model';
import { KeplrService } from '../../../../services/keplr.service';

@Component({
  standalone: true,
  selector: 'app-chain-card',
  templateUrl: './chain-card.component.html',
  styleUrl: './chain-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, AsyncPipe, NgClass, SvgIconComponent]
})
export class ChainCardComponent implements OnInit, OnDestroy {
  public readonly chain = input.required<IChainInfoView>();

  protected isRegistered$!: Observable<boolean>;

  protected readonly keplrService = inject(KeplrService);

  private readonly destroy$ = new Subject<void>();

  public ngOnInit(): void {
    this.isRegistered$ = this.keplrService.isChainRegistered(this.chain().info.chainId);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected onAddToKeplr(event: Event): void {
    event.stopPropagation();

    this.isRegistered$
      .pipe(
        take(1),
        filter(isRegistered => !isRegistered && this.keplrService.isKeplrInstalled),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.keplrService.suggestChain(this.chain().info));
  }
}
