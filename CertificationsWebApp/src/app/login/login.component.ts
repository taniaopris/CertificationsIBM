import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string ;
  password: string ;
  errorMessage: string;

  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {

  }

  login()
  {
    this.loginService.login(this.username, this.password).subscribe(

      res =>
      {

        // tslint:disable-next-line: curly
        sessionStorage.setItem('USER', this.username);
        if(this.username === 'admin') this.router.navigate(['/requests']);

         else this.router.navigate(['certifications']);
      },
      error => this.errorMessage = 'Invalid Credentials!'
    );
  }

}
