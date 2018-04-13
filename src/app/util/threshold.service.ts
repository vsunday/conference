import { Subject} from 'rxjs/Subject';

export class ThresholdService {
  thresholdChange = new Subject<number>();
}