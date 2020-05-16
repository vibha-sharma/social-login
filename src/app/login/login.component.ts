import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: SocialUser;
  	//loggedIn: boolean;
    constructor(private authService: AuthService) { }

  ngOnInit(): void {
  	this.authService.authState.subscribe((user) => {
      this.user = user;
     // this.loggedIn = (user != null);
    });
  }
   signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log('google', x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log('facebook', x));
  }
  signOut(): void {
    this.authService.signOut();
  }
}
