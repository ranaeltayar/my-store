import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "../services/confirmation.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName: string = '';
  totalAmount: number = 0;

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.fullName = this.confirmationService.getFullName()
    this.totalAmount = this.confirmationService.getTotalAmount()

  }

}
