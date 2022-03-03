import { Injectable } from '@angular/core';
import { annotate } from 'rough-notation';

@Injectable({
  providedIn: 'root'
})
export class NotationService {

  constructor() {};

  notate() {
    if (document.querySelector('.notate')) {
      const notate = annotate(document.querySelector('.notate')!, { type: 'highlight', color: '#ffe4e6' });
      notate.show();
    }
  }

}
