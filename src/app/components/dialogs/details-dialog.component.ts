import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'details-dialog-selector',
    templateUrl: './details-dialog.component.html',
    styleUrls: ['./details-dialog.component.scss']
})

export class DetailsDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}
