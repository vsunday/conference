import { Item } from './item.model';

export class Segment {
  constructor(
    public start_time: string,
    public speaker_label: string,
    public end_time: string,
    public items: Item[]) {};
}