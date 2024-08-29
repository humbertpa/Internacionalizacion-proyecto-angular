import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.css']
})
export class ProjectTemplateComponent {
  @Input() periodo: string = ''
  @Input() imageUrl: string = ''
  @Input() titulo: string = ''
  @Input() descripcion: string = ''
}
