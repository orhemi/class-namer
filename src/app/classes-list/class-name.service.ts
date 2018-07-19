import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { WordsMapCount } from './wordsMapCount.model';

@Injectable()
export class ClassNameService {
  // private apiUrl = 'https://www.classnamer.org';
  private classesNames = [
    'BasicResultParser',
    'LegacyButtonObserver',
    'AbstractButtonObserver',
    'AbstractButtonParser',
    'BasicButtonBundle',
    'BasicDeviceParser',
    'LegacyButtonParser',
    'AbstractDeviceParser',
    'AbstractScrollbarParser',
    'BasicDeviceBundle'
  ];

  constructor(private httpClient: HttpClient) {
  }

  private getWordsOfClassName(className): string[] {
    return className.split(/(?=[A-Z])/);
  }

  getClassesNames() {
    // return this.httpClient.get(this.apiUrl);
    return Observable.of(this.classesNames);
  }

  buildWordsMapCount(classesNames) {
    const wordsMapCount = new WordsMapCount();

    classesNames.forEach(className => {
      const words = this.getWordsOfClassName(className);

      words.forEach(word => {
        wordsMapCount.insertWord(word);
      });
    });

    return wordsMapCount;
  }


}
