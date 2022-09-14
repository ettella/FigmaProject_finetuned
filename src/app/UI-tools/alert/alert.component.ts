// import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  closed: boolean = false;

  @Input() done: boolean = false;

  constructor(
    // private router: Router, 
    // private route: ActivatedRoute
    )
     { }

  ngOnInit(): void {
  }

  // onClose(event:any) {
  //   console.log('Booked successfully!');
  //   // this.router.navigate(['list'], { relativeTo: this.route })
  
  // }

  onClose(){
    this.closed = true;
    this.done = false;
  }


}
