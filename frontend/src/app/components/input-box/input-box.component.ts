import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Word} from '../../models/Word';
import {WordsService} from '../../services/words.service';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @ViewChild('testInput') testInput: ElementRef;

  words: Word[];
  currentWord: string = null;

  constructor(private wordsService: WordsService) { }

  ngOnInit(): void {
    // set input focus
    document.getElementById('test-input').focus();
    this.retrieveWords();
  }

  private retrieveWord(): void {
    this.wordsService.getWord().subscribe(word => this.words.push(word));
  }

  private retrieveWords(): void {
    this.wordsService.getWords(10).subscribe(words => {
      this.words = words;
      this.words.forEach(word => console.log(word));
    });
  }

  /**
   * Handle {@link KEY_CODE} event
   * @param event the event to handle
   */
  onKeyDown(event: KeyboardEvent): void {
    const inputValue = (event.target as HTMLElement).textContent;
    if (event.code === KEY_CODE.ENTER || event.code === KEY_CODE.SPACE) {
        event.preventDefault();
        event.stopPropagation();

        // remove first item of the words array
        this.words.shift();
        // set to null the current word
        this.currentWord = null;
        // clear input value
        (event.target as HTMLElement).textContent = '';

        this.retrieveWord();
    } else if (event.code === KEY_CODE.BACKSPACE) {
        if (inputValue === this.currentWord.substr(0, inputValue.length)) {
          this.words[0].word = inputValue.charAt(inputValue.length - 1).concat(this.words[0].word);
        }
    } else if (event.code === KEY_CODE.ARROW_UP
      || event.code === KEY_CODE.ARROW_DOWN
      || event.code === KEY_CODE.ARROW_LEFT
      || event.code === KEY_CODE.ARROW_RIGHT) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Handle typed characters
   * @param event the event to handle
   */
  onInput(event: Event): void {
    // set the new current word
    if (this.currentWord === null) {
      this.currentWord = this.words[0].word;
    }
    this.checkCharacter(event);
  }

  /**
   * Check the validity of the character
   * @param event the event containing the character to check
   * @private
   */
  private checkCharacter(event: Event): void {
    const inputEvent = event as InputEvent;
    const key = inputEvent.data;
    const inputValue = (event.target as HTMLElement).textContent;
    if (key === this.words[0].word.charAt(0)) {
      if (inputValue === this.currentWord.substr(0, inputValue.length)) {
        this.words[0].word = this.words[0].word.substring(1);
      }
    }
  }

  /**
   * Ignore the mouse click
   * @param event the click to ignore
   */
  onMouseDown(event: MouseEvent): void {
    document.getElementById('test-input').focus();
    this.setCaretPosition('test-input', (event.target as HTMLElement).textContent.length);
    event.preventDefault();
  }

  /**
   * Ignore the tap on touch devices
   * @param event the tap to ignore
   */
  onTouchStart(event: TouchEvent): void {
    document.getElementById('test-input').focus();
    this.setCaretPosition('test-input', (event.target as HTMLElement).textContent.length);
    event.preventDefault();
  }

  /**
   * Set the caret position
   * @param elemId id of the html element
   * @param caretPos the position of the caret
   */
  setCaretPosition(elemId: string, caretPos: number): void {
    const el = document.getElementById(elemId);
    const range = document.createRange();
    const sel = window.getSelection();
    if (el.childNodes[0]) {
      range.setStart(el.childNodes[0], caretPos);
      range.collapse(true);

      sel.removeAllRanges();
      sel.addRange(range);
    }
  }

}

enum KEY_CODE {
  SPACE = 'Space',
  ENTER = 'Enter',
  BACKSPACE = 'Backspace',
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight'
}
