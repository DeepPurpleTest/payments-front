import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-receipt',
  templateUrl: './dialog-receipt.component.html',
  styleUrls: ['./dialog-receipt.component.css']
})
export class DialogReceiptComponent implements OnInit {
  public url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.url = this.data.url;
  }
  ngOnInit(): void {
    console.log('Url in ReceiptComponent! ' + this.url);
  }

  // public loadPdf(): void {
  //   this.receiptService.getReceipt(this.data.id).subscribe({
  //     next: (data) => {
  //       console.log('!!!!!!!1 ')
  //       let blob = data as Blob;
  //       this.pdf = window.URL.createObjectURL(blob);
  //       console.log('!!!!!!2 ' + this.pdf);
  //     },
  //     error: (error) => {
  //       console.error('Error:', error);
  //     }
  //   });
  // }

}
