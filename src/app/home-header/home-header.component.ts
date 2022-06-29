import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from '../signin/models/current-user.model';
import { AuthenticationService } from '../signin/services/authentication.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent implements OnInit {
  currentUser!: CurrentUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.currentUser = authenticationService.getCurrentUser();
  }

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
