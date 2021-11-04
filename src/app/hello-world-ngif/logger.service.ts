import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggerService {
  writeCount(count: number): void {
    console.warn(count);
  }
}
