import { Component } from '@angular/core';

/**
 * @title Basic checkboxes
 */
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {
  //selected=-1;
  currentlyChecked;
  setcpCheckBox(event: any) {
debugger;


    this.currentlyChecked = event;

  
  }
}
