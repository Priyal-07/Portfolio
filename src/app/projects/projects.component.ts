import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Project1Component } from '../project1/project1.component';
import { inject} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly dialog = inject(MatDialog);

  openProject1Dialog() {
    const dialogRef = this.dialog.open(Project1Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Project 1 Dialog result: ${result}`);
    });
  }
}
