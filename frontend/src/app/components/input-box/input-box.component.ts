import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Word} from '../../models/Word';
import {WordsService} from '../../services/words.service';
import {TypedWord} from '../../models/TypedWord';
import {InteractionService} from '../../services/interaction.service';
import {TimerStatus} from '../../models/TimerStatus';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @ViewChild('testInput') testInput: ElementRef;

  words: Word[];
  typedWords: TypedWord[];
  currentWord: string = null;
  flagWrongWord = false;
  timerStatus: TimerStatus;
  correctWordsCounter: number;
  correctCharsCounter: number;

  constructor(private wordsService: WordsService, private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.getTimerStatus()
      .subscribe(status => {
        this.timerStatus = status;
        if (status === TimerStatus.OFF) {
          // unfocus test-input
          document.getElementById('test-input').blur();
        }
      });
    this.interactionService.getCorrectWords()
      .subscribe(words => this.correctWordsCounter = words);
    this.interactionService.getCorrectChars()
      .subscribe(chars => this.correctCharsCounter = chars);
    this.typedWords = [];
    // set input focus
    this.setFocus();
    this.retrieveWords();
  }

  setFocus(): void {
    document.getElementById('test-input').focus();
    this.setCaretPosition('test-input', null);
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
      // add typed word inside typedWords array
      if (inputValue !== '') {
        const tw = new TypedWord();
        tw.word = inputValue;
        tw.isCorrect = inputValue === this.currentWord;
        this.typedWords.push(tw);
        // share data with stats component
        if (tw.isCorrect === true) {
          this.correctWordsCounter++;
          this.interactionService.setCorrectWords(this.correctWordsCounter);
          this.correctCharsCounter = this.correctCharsCounter + tw.word.length;
          this.interactionService.setCorrectChars(this.correctCharsCounter);
        }
        this.interactionService.setTotalWords(this.typedWords.length);
        // remove first item of the words array
        this.words.shift();
        // set to null the current word
        this.currentWord = null;
        // clear input value
        (event.target as HTMLElement).textContent = '';
        // set the incorrectness of the word to default
        this.flagWrongWord = false;

        this.retrieveWord();
      }
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
    // start the timer
    if (this.timerStatus === TimerStatus.DEFAULT || this.timerStatus === TimerStatus.OFF) {
      this.interactionService.setTimerStatus(TimerStatus.ON);
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
    const inputType = inputEvent.inputType;
    const inputValue = (event.target as HTMLElement).textContent;
    if (inputValue === this.currentWord.substr(0, inputValue.length)) {
      if (inputType !== 'deleteContentBackward') {
        this.words[0].word = this.words[0].word.substring(1);
        this.flagWrongWord = false;
      } else if (inputType === 'deleteContentBackward') {
        this.flagWrongWord = false;
      }
    } else {
      this.flagWrongWord = true;
    }
  }

  /**
   * Set focus on .main-container click
   */
  onMainContainerClick(): void {
    this.setFocus();
  }

  /**
   * Ignore the mouse click
   * @param event the click to ignore
   */
  onMouseDown(event: MouseEvent): void {
    this.setFocus();
    event.preventDefault();
  }

  /**
   * Ignore the tap on touch devices
   * @param event the tap to ignore
   */
  onTouchStart(event: TouchEvent): void {
    this.setFocus();
    event.preventDefault();
  }

  /**
   * Set the caret position
   * @param elemId id of the html element
   * @param caretPos the position of the caret
   */
  setCaretPosition(elemId: string, caretPos: number): void {
    if (caretPos === null) {
      caretPos = document.getElementById(elemId).textContent.length;
    }
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
