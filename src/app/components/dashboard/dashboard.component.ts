import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { DrawerModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [KENDO_GRID, SidebarComponent , DrawerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  gridData = [
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "X", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },
    // { type: "Cel", state: "ANN", description: "Electrical harnesses", date: "12/16/2021", easaAD: "EU 2021-0282", faAD: "F-1986-125-048", pa: "", sb: "05.00.60 -TELEX", workReport: "IN COSTRUZIONE" },

  ];
}
