import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Currículo';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  close() {
    this.sidenav.close();
  }

  constructor(
    private observer: BreakpointObserver) {
   
   }

  teste() {
    window.navigator.vibrate(200);
  }

  vaiFechar() {
    if (this.sidenav.mode != 'side') {
      this.sidenav.close();
    }
  }

  
   ngAfterViewInit() {
   //  ngAfterContentInit(){
    

    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';        
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  compartilhar() {

      // window.navigator.vibrate(50);
    
    navigator.share({
      title: 'Currículo',
      url: 'https://joaoxavierdeveloper.netlify.app/',
      text: ''
    }).then(() => {
      console.log('foii');
    })
      .catch(console.error) 
  }




}

