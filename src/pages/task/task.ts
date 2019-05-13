import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  public description: string; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addTask(): void {
    const homePage = this.navCtrl.getPrevious();
    homePage.data.description = this.description;
    
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

}
