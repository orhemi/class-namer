export class WordsMapCount {
  private wordsMap: Map<string, number>;
  private total: number;

  constructor() {
    this.wordsMap = new Map<string, number>();
    this.total = 0;
  }

  insertWord(word) {
    this.total++;

    if (this.wordsMap.has(word)) {
      const count = this.wordsMap.get(word);
      this.wordsMap.set(word, count + 1);

    } else {
      this.wordsMap.set(word, 1);
    }
  }

  getTotal() {
    return this.total;
  }

  getAsArray() {
    const array = [];
    this.wordsMap.forEach(function (value, key) {
      array.push({
        word: key,
        count: value,
      });
    });

    return array;
  }
}
