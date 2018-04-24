export class Streak {
  constructor(
    public type: string,
    public start_at: number,
    public stop_at: number,
    public value: number,
    public sub_value: number, 
    public original_type: string) {};
}