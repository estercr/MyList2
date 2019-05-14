import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public tasks = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {}
  
  ionViewDidEnter(): void {
    const { desc } = this.navCtrl.getByIndex(0).data;
    const { index } = this.navCtrl.getByIndex(0).data;

    if (desc && index === undefined) {
      const newTask = {
        desc: desc,
        done: false
      };

      this.tasks.push(newTask);
    } else if (index !== undefined) {
      this.tasks[index].desc = desc;
    }
  }

  private deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  editTask(desc: string, index: number): void {
    const task = {
      desc: desc,
      index: index
    };

    this.navCtrl.push('TaskPage', task);
  }

}
