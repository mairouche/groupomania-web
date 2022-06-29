import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Member } from './model/member.model';
import { environment } from 'src/environments/environment';
import { MemberService } from './service/member.service';

@Component({
  selector: 'app-home-members',
  templateUrl: './home-members.component.html',
  styleUrls: ['./home-members.component.css'],
})
export class HomeMembersComponent implements OnInit {
  members!: Member[];
  environment;

  constructor(private memberService: MemberService) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.memberService
      .list()
      .pipe(
        map((data) => {
          this.members = data;
        })
      )
      .subscribe();
  }
}
