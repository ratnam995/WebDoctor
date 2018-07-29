import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'WebDoctor';
  private viewContainerRef: ViewContainerRef;

  constructor(
    viewContainerRef: ViewContainerRef,
    private toastr: ToastsManager,
  ){
    this.toastr.setRootViewContainerRef(viewContainerRef);
    this.viewContainerRef = viewContainerRef;
  }

  ngOnDestroy(): void {
    console.log("ngondestroy");
  }

  ngOnInit(): void {
    console.log("ngoninit");
  }
}
