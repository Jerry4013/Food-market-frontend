import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {UserModel} from '../../../models/user.model';
import {ErrorModel} from '../../../models/error.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  errMsg: string;
  user: UserModel;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.authService.login(f.value.username, f.value.password).subscribe(response => {
      if (response.status === 'success' ) {
        this.authService.user = response.data as UserModel;
        this.user = this.authService.user;
        this.authService.userChanged.next(this.user);
        this.router.navigate(['/']).then();
      } else {
        this.errMsg = (response.data as ErrorModel).errMsg;
      }
    });
  }

  forget() {
    this.router.navigate(['/pwd']).then();
  }
}
