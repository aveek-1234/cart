import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardService } from 'src/app/service/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    
    public logError:boolean=false;
    constructor( public loginformBuilder: FormBuilder, private guard : GuardService,private router:Router) {}
    loginform= this.loginformBuilder.group({
      email: '',
      password: ''
    })
    onSubmit(){
      if(this.loginform.value.email==="ak@gmail.com" && this.loginform.value.password==="1234" )
      {
          this.logError=false;
          this.guard.isLoggedIn=true;
          this.router.navigate(['/products']);
      }
      else
      {
        this.logError=true;
      }
    }
     
}
