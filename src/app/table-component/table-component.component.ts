import { Component, OnInit } from '@angular/core';

import { WifiInfoService } from '../wifi-info.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})
export class TableComponentComponent implements OnInit {

  data: any[] = [];

  constructor(
    private wifiService: WifiInfoService,
  ) { }

  getData(str: string) {
    this.wifiService
      .getData(str)
      .subscribe((response: any) => {
        const data = response;
        this.data = data;
    });
  };

  ngOnInit(): void {
    
  }
}
