import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface SkillDemand {
  name: string;
  count: number;
  percentage: number;
}

interface ChartDataPoint {
  value: number;
  label: string;
}

@Component({
  selector: 'app-admin-analytics',
  imports: [CommonModule],
  templateUrl: './admin-analytics.component.html',
  styleUrl: './admin-analytics.component.css'
})
export class AdminAnalyticsComponent {
  statCards = [
    { title: 'Total Jobs Posted', value: '2,451' },
    { title: 'Active Jobs', value: '1,832' },
    { title: 'Total Applicants', value: '12,405' },
    { title: 'Avg. Time to Hire', value: '23 days' }
  ];

  topSkills: SkillDemand[] = [
    { name: 'JavaScript', count: 842, percentage: 100 },
    { name: 'Python', count: 654, percentage: 78 },
    { name: 'React', count: 521, percentage: 62 },
    { name: 'SQL', count: 498, percentage: 59 },
    { name: 'Java', count: 432, percentage: 51 }
  ];

  jobsGrowthData: ChartDataPoint[] = [
    { value: 2100, label: '2,100' },
    { value: 2300, label: '2,300' },
    { value: 2150, label: '2,150' },
    { value: 2400, label: '2,400' },
    { value: 2350, label: '2,350' },
    { value: 2451, label: '2,451' }
  ];

  maxChartValue = 2500;
  activeTimeFilter = 'Year';

  constructor() { }

  ngOnInit(): void {
    // Calculate the maximum value for chart scaling
    this.maxChartValue = Math.max(...this.jobsGrowthData.map(item => item.value));
  }

  setTimeFilter(filter: string): void {
    this.activeTimeFilter = filter;
    // In a real application, this would fetch new data based on the filter
  }
}
