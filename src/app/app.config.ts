import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideSvgIcons } from '@ngneat/svg-icon';

import { cancelIcon } from './svg/cancel';
import { checkmarkIcon } from './svg/checkmark';
import { closeIcon } from './svg/close';
import { editIcon } from './svg/edit';
import { plusIcon } from './svg/plus';
import { synchronizeIcon } from './svg/synchronize';
import { unavailableIcon } from './svg/unavailable';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideSvgIcons([cancelIcon, checkmarkIcon, editIcon, plusIcon, unavailableIcon, closeIcon, synchronizeIcon])
  ]
};
