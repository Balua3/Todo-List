import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  list:any[]=[];

  addTask(item:string)
  {
    if(item){

    this.list.push({id:this.list.length,name:item})
    console.log(this.list);
    } else{
      alert('Enter Task')
    }
  }
  removeTask(id:number){
    console.log(id);
    this.list=this.list.filter(item=>item.id!==id);
  }
}
