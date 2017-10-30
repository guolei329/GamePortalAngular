import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from './services/auth.service';
import {EmailLoginComponent } from './email-login/email-login.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import {AppRoutingModule} from './app-routing.module';
import {WindowService} from './window.service';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatFeedComponent } from './chat-feed/chat-feed.component';
import { MessageComponent } from './message/message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import {ChatService} from './services/chat.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDA5tCzxNzykHgaSv1640GanShQze3UK-M',
  authDomain: 'universalgamemaker.firebaseapp.com',
  databaseURL: 'https://universalgamemaker.firebaseio.com',
  projectId: 'universalgamemaker',
  storageBucket: 'universalgamemaker.appspot.com',
  messagingSenderId: '144595629077'
};

@NgModule({
  declarations: [
    AppComponent,
    EmailLoginComponent,
    PhoneLoginComponent,
    LoginIndexComponent,
    ChatFormComponent,
    ChatRoomComponent,
    ChatFeedComponent,
    MessageComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService, WindowService, ChatService],
  bootstrap: [AppComponent]
})

export class AppModule { }
