import {Injectable} from "@angular/core";

@Injectable()
export class DateFormatterService {
  formatDate(dateArray: any): Date {
      const [year, month, day, hour, minute, second] = dateArray;
      return new Date(year, month - 1, day, hour, minute, second);
    }
}
