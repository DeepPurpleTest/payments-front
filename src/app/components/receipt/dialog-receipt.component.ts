import {Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgxExtendedPdfViewerComponent} from "ngx-extended-pdf-viewer";

@Component({
  selector: 'app-dialog-receipt',
  templateUrl: './dialog-receipt.component.html',
  styleUrls: ['./dialog-receipt.component.css']
})
export class DialogReceiptComponent {
  @ViewChild(NgxExtendedPdfViewerComponent, {static: false}) // for check what happens in pdf and close dialog with result
  private pdfViewer!: NgxExtendedPdfViewerComponent;
  public url: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogReceiptComponent>) {
    console.log('DATA IN CONSTRUCTOR ' + this.data.url);
    this.url = this.data.url;
    console.log('URL INT CONSTRUCTOR ' + this.url)
    dialogRef.beforeClosed().subscribe((result) => {
      console.log('The dialog is about to be closed');
      this.pdfViewer.ngOnDestroy();
    });
  }

}
