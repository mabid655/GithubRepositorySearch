import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';

import {DetailsDialogComponent} from './dialogs/details-dialog.component';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-search-selector',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  totalResults: number;
  showLoader: boolean;
  showContentArea: boolean;
  repositories: any;
  noRepository: boolean;
  searchForm: FormGroup;

  // MatPaginator Inputs
  page = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50, 75];

  // MatPaginator Output
  pageEvent: PageEvent;

  displayedColumns: string[] = ['name', 'language', 'stargazers_count', 'forks_count', 'action'];

  constructor(
    private searchAPIs: SearchService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.searchForm = new FormGroup({
      searchInput: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    });
  }

  searchRepository() {
    this.showContentArea = true;
    this.showLoader = true;
    const reqObj = {
      repositoryName: this.searchForm.value.searchInput,
      page: this.page,
      limit: this.pageSize
    };
    this.searchAPIs.getRepositories(reqObj).subscribe((res) => {
      this.showLoader = false;
      this.totalResults = res.total_count;
      this.repositories = res.items;
      this.noRepository = !res.items.length;
    });
  }

  detailsFunction(repository) {
    this.dialog.open(DetailsDialogComponent, {data: repository, disableClose: true});
  }

  paginationFunction(e) {
    this.page = e.pageIndex + 1; // In Event page index start from 0
    this.pageSize = e.pageSize;
    this.searchRepository();
  }

}
