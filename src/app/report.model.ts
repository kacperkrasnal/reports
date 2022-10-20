export class Report {
  constructor(
    public name: string = '',
    public format: string = 'Excel',
    public emailTo: string = '',
    public exportType: string = 'No repeat',
    public exportTime: string = ''
  ) {}
}

export const FORMATS: string[] = ['Excel', 'CSV']
export const SCHEDULES: string[] = ['No repeat', 'Specific Date', 'Daily', 'Weekly']
