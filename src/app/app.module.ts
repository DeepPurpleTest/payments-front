import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./components/login/login.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {CardService} from "./services/card.service";
import { CardComponent } from './components/card/card.component';
import {PaymentService} from "./services/payment.service";
import { PaymentsComponent } from './components/payments/payments.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { TransactionComponent } from './components/transaction/transaction.component';
import {MatSelectModule} from "@angular/material/select";
import { PaymentDetailsComponent } from './components/payment-details/payment.details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReceiptService} from "./services/receipt.service";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogReceiptComponent } from './components/receipt/dialog-receipt.component';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CardComponent,
    PaymentsComponent,
    TransactionComponent,
    PaymentDetailsComponent,
    DialogReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxExtendedPdfViewerModule,
    //NgxExtendedPdfViewerModule
  ],
  providers: [
    UserService,
    AuthService,
    CardService,
    PaymentService,
    ReceiptService,
    DialogReceiptComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
