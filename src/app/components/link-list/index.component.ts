import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'link-list',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class LinkListComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activeRouter.snapshot)
  }

  backToSplash () {
    this.router.navigateByUrl('/')
  }

}
