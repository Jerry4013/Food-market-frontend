import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../models/user.model';
import {ErrorModel} from '../../../models/error.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide = true;
  user: UserModel;
  errMsg: string;

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = this.authService.user;
  }

  onSubmit(f: NgForm) {
    this.user = new UserModel(0, f.value.username, f.value.password, f.value.name,
      f.value.email, f.value.phone, f.value.address);
    this.authService.signup(this.user).subscribe(response => {
      if (response.status === 'success' ) {
        this.authService.user = response.data as UserModel;
        this.user = this.authService.user;
        this.authService.userChanged.next(this.user);
        this.router.navigate(['/']).then();
        this.snackBar.open('New user created!', 'done', {
          duration: 2000,
        });
      } else {
        this.errMsg = (response.data as ErrorModel).errMsg;
      }
    });
  }
}
