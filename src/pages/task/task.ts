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
  
  public task: { desc: string, index: number };
  public desc: string; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task = this.navParams.data.desc ? this.navParams.data : {};
    this.desc = this.task.desc;
  }

    ionViewDidLoad() {
      this.navCtrl.getPrevious().data = {};
  }

  addTask(): void {
    const homePage = this.navCtrl.getPrevious();
    homePage.data.desc = this.desc;
    homePage.data.index = this.task.index;
    
    
    this.navCtrl.pop();
  }


}
