import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../../_services';
import { Account } from '../../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  accounts!: any[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(accounts => {
        console.log('Fetched accounts:', accounts); // Debug log
        this.accounts = accounts;
      });
}

  toggleAccountStatus(account: any) {
    // Toggle the isActive property
    account.isActive = !account.isActive;

    // Call the backend to update the account status
    this.accountService.update(account.id, { isActive: account.isActive })
      .pipe(first())
      .subscribe({
        next: () => {
          console.log(`Account ${account.isActive ? 'activated' : 'deactivated'}`);
        },
        error: (err) => {
          console.error('Error updating account status:', err);
        }
      });
  }
  

/* deleteAccount(id: string) {
    const account = this.accounts.find(x => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.accounts = this.accounts.filter(x => x.id !== id));
  }*/
}