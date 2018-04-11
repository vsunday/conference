export class Conference {
  constructor(public name: string = '',
    public startdate: string = '',
    public enddate: string = '',
    public desc: string = '',
    public url: string = '',
    public location: string = '',
    public attendance: string = '0',
    public participants: string = '',
    public price: string = '',
    public id: string = '') {
    }
}