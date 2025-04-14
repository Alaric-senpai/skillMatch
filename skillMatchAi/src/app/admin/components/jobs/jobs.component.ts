import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  pendingCount = 2;
  approvedCount = 1;
  
  jobStatusCounts: JobStatusCount[] = [
    { status: 'All Jobs', count: 4, active: false },
    { status: 'Pending Review', count: 2, active: true },
    { status: 'Approved', count: 1, active: false },
    { status: 'Rejected', count: 1, active: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setActiveFilter(status: string): void {
    this.jobStatusCounts.forEach(item => {
      item.active = item.status === status;
    });
  }
}

interface JobStatusCount {
  status: string;
  count: number;
  active?: boolean;
}
