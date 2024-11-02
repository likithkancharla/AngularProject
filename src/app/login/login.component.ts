import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    //console.log(`Email: ${this.email}, Password: ${this.password}`); // Log inputs
    this.http.get(`http://localhost:3000/checkuser/${this.email}/${this.password}`)
      .subscribe(
        (response: any) => {
          console.log('Login successful:', response); // Log successful response
          this.router.navigate(['/clientmeeting']);
        },
        (error) => {
          console.error('Login error:', error); // Log error response
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
  }
}  

