import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})


export class LandingPageComponent {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        // Handle successful login here, e.g., redirect to a user dashboard.
        console.log('Google login success', result);
      })
      .catch((error) => {
        // Handle login error here.
        console.error('Google login error', error);
      });
  }
}
