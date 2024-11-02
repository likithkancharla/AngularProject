import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent implements OnInit {


  
  name:string='';
  email:string='';
  address:string='';
  password:string='';
  message:string='';
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }


  addClient(){
    const client={
      
      name:this.name,
      email:this.email,
      address:this.address,
      password:this.password


    };


    this.http.post('http://localhost:3000/addClient',client)
    .subscribe((response:any)=>{
      this.message=response.message;
      this.clearForm();
    },
    (error)=>{
      console.error('Error adding the product',error);
    });
  }
  clearForm() {
    this.name = '';
    this.email = '';
    this.address = '';
    this.password = '';
  }


}
