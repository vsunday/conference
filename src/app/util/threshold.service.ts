import { Subject} from 'rxjs';

export class ThresholdService {
  thresholdChange = new Subject<number>();
}