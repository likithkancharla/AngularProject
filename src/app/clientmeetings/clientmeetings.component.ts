import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clientmeetings',
  templateUrl: './clientmeetings.component.html',
  styleUrl: './clientmeetings.component.css'
})
export class ClientmeetingsComponent {
  topic: string = '';
  participants: number = 0;
  startTime: string = '';
  details: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  scheduleMeeting() {
    const meeting = {
      topic: this.topic,
      participants: this.participants,
      startTime: this.startTime,
      details: this.details
    };

    this.http.post('http://localhost:3000/addMeeting', meeting)
      .subscribe((response: any) => {
        this.message = response.message;
        this.clearForm();
      }, (error) => {
        console.error('Error scheduling the meeting:', error);
      });
  }

  clearForm() {
    this.topic = '';
    this.participants = 0;
    this.startTime = '';
    this.details = '';
  }

}
