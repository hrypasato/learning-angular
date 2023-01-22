import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements 
  OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked {
  

  nombre:string = 'Miguel';

  segundos:number = 0;

  timerSubscription!: Subscription;

  constructor(){
    //antes de crear el html
    console.log("constructor");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
    this.timerSubscription.unsubscribe();
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  ngOnInit(): void {
    //Cuando el html está creado
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe(seg => this.segundos = seg);
  }

  onClick(){

  }

}
