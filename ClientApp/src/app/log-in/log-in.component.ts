import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService, 
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router ) { }

  loginForm: FormGroup;
  submitted:false;
  returnUrl:string;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onSubmit(){
    debugger;
    this.submitted = false;
    if(this.loginForm.invalid){
      return;
    }
    this.service.login(this.loginForm.value).subscribe((data:any)=>{
      if(data.token != null){
        this.router.navigate(['home']);  
      }
    })
  }
}
