import { bindable } from 'aurelia-framework';
import { Beach } from '../../services/cb-types';

export class BeachList {
  @bindable
  beaches: Beach[];
}
