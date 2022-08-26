import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  fullName: string = '';
  totalAmount: number = 0;

  constructor() {
  }

  setFullName(fullName: string) {
    this.fullName = fullName
  }

  setTotalAmount(totalAmount: number) {
    this.totalAmount = totalAmount
  }

  getFullName(): string {
    return this.fullName
  }

  getTotalAmount(): number {
    return this.totalAmount
  }
}
