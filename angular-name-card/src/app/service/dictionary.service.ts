import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Word[] = [
    {
      word: 'red',
      mean: 'màu đỏ'
    },
    {
      word: 'green',
      mean: 'màu xanh lá'
    },
    {
      word: 'back',
      mean: 'màu đen'
    },
    {
      word: 'white',
      mean: 'màu trắng'
    },
    {
      word: 'blue',
      mean: 'màu xanh dương'
    },
    {
      word: 'brown',
      mean: 'màu nâu'
    },
  ]

  constructor() {
  }

  getAll() {
    return this.dictionaries
  }

  findByWord(word: string) {
    return this.dictionaries.find(item => item.word == word);
  }
}
