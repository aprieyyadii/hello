import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


	@ViewChild('username')username;
	@ViewChild('password')password;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



signIn(){
  this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
  .then(data => {
    console.log('got some data', this.fire.auth.currentUser);
  })
  .catch(error =>{
    console.log('got error',error);
  })
	console.log('would sign in with', this.username.value, this.password.value);

}
}