import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnChanges{
  
  @Input() nombre!:string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
