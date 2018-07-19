import { Component, OnInit } from '@angular/core';

import { ClassNameService } from './class-name.service';
import { WordsMapCount } from './wordsMapCount.model';

const minSize = 10;
const maxSize = 100;

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  wordsMapCount: WordsMapCount;
  wordsCounts: any[];

  constructor(private classNameService: ClassNameService) {
  }

  ngOnInit() {
    this.classNameService.getClassesNames().subscribe(classesNames => {
      this.wordsMapCount = this.classNameService.buildWordsMapCount(classesNames);
      this.wordsCounts = this.wordsMapCount.getAsArray();
    });
  }

  getWordSize(count) {
    const total = this.wordsMapCount.getTotal();
    let sizePerc = (count / total) * 100;

    if (sizePerc < minSize) {
      sizePerc = minSize;
    } else if (sizePerc > maxSize) {
      sizePerc = maxSize;
    }
    return sizePerc;
  }

}
