import {Component, HostListener, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {Key} from '../../models/Key';
import {IModalContent} from '../../models/IModalContent';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  showModal = false;
  modalContent: IModalContent;

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.getModalContent()
      .subscribe(content => {
        if (content !== null) {
          this.modalContent = content;
          this.showModal = true;
        }
      });
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === Key.ESCAPE) {
      if (this.showModal === true) {
        this.showModal = false;
      }
    }
  }

  onOpenButtonClick(): void {
    this.showModal = true;
  }

  onCloseButtonClick(): void {
    this.interactionService.incrTestCounter();
    this.showModal = false;
  }
}
