import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , DropDownsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kendoAngular';
  areaList: Array<string> = ["Small", "Medium", "Large"];

  // [
  //   { text: 'Area 1', value: 'area1' },
  // ];
  gridData = [
    { ProductName: 'Apple', UnitPrice: 1.2 },
    { ProductName: 'Banana', UnitPrice: 0.5 },
    { ProductName: 'Orange', UnitPrice: 0.8 }
  ];
}
