import { Component, Input } from '@angular/core';
import { Projet } from '../../Models/Projects.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input()
  currentProject! : Projet;
}
