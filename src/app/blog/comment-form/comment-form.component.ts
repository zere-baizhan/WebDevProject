import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  content = '';

  @Output() submitComment = new EventEmitter<string>();

  onSubmit(): void {
    if (this.content.trim()) {
      this.submitComment.emit(this.content.trim());
      this.content = ''; // reset after submit
    }
  }
}

