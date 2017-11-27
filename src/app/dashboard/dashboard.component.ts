import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

import { ReportComponent } from '../report/report.component';

import { WebinAuthenticationService } from '../webin-authentication.service';

import { ReportType } from '../report-type.enum';

@Component({
  selector: 'app-main',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ReportComponent
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private webinAuthenticationService: WebinAuthenticationService) { }

  ngOnInit() {
  }

  isEga(): boolean {
    return this.webinAuthenticationService.ega;
  }

  ReportType = ReportType;   // Allows use in template

  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  @ViewChild('studies') studies: ReportComponent;
  @ViewChild('samples') samples: ReportComponent;
  @ViewChild('runs') runs: ReportComponent;
  @ViewChild('analyses') analyses: ReportComponent;
  @ViewChild('runFiles') runFiles: ReportComponent;
  @ViewChild('analysisFiles') analysisFiles: ReportComponent;
  @ViewChild('dacs') dacs: ReportComponent;
  @ViewChild('policies') policies: ReportComponent;
  @ViewChild('datasets') datasets: ReportComponent;

  consumeReportChange(event) {
    let newTabIndex = this.getTabIndex(event.reportType);
    console.log("** change report **", event);
    if (newTabIndex !== undefined) {
      this.tabGroup.selectedIndex = newTabIndex;
    }
  }

  getTabIndex(reportType: ReportType) {
    if (this.isEga()) {
      switch(reportType) {
        case ReportType.studies: return 1;
        case ReportType.samples: return 2;
        case ReportType.runs: return 3;
        case ReportType.analyses: return 4;
        case ReportType.runFiles: return 5;
        case ReportType.analysisFiles: return 6;
        case ReportType.dacs: return 7;
        case ReportType.policies: return 8;
        case ReportType.datasets: return 9;
      }
    }
    else {
      switch(reportType) {
        case ReportType.studies: return 2;
        case ReportType.samples: return 3;
        case ReportType.runs: return 4;
        case ReportType.analyses: return 5;
        case ReportType.runFiles: return 6;
        case ReportType.analysisFiles: return  7;
      }
    }
    return undefined;
  }


  }

}
