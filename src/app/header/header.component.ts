import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
// declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  // @ViewChild('#side-menu') menuElement: ElementRef;

  // constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    // (<any>$(this.menuElement)).metisMenu();
    // <any>$(() => {
    //   $(window).bind('load resize', function () {
    //     var i = 50,
    //       n = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
    //     n < 768 ? ($('div.navbar-collapse').addClass('collapse'), i = 100) : $('div.navbar-collapse').removeClass('collapse');
    //     var e = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;
    //     e -= i, e < 1 && (e = 1), e > i && $('#page-wrapper').css('min-height', e + 'px')
    //   });
    //   for (var i = window.location, n = $('ul.nav a').filter(function () {
    //       return this.href == i
    //     }).addClass('active').parent();;) {
    //     if (!n.is('li')) break;
    //     n = n.parent().addClass('in').parent();
    //   }
    // });
  }

}
