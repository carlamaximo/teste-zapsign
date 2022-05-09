import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  docs = [
    { id_doc: '', name: 'generate', signed: false, company: '', created_by: [] }
  ]

  constructor(private api: ApiService){
    this.getDocs();
  }

  ngOnInit(): void {
  }

  getDocs = () => {
    this.api.getAllDocs().subscribe(
      data => {
        this.docs = data;
      },
      error => {
        console.log(error.message);
      }
    )
  }

  deleteDoc = (doc:any) => {
    console.log(doc);
    this.api.deleteDoc(doc.id_doc).subscribe(
      data => {
        alert('Documento deletado com sucesso!');
        let index:number = 0;
        this.docs.forEach((e, i,) => {
          if (e.id_doc === doc.id_doc) index = i;
          });
          this.docs.splice(index, 1);

      },
      error => {
        alert('Ops, não foi possível deletar esse documento.');
        console.log(error.message);
      }
    )
  }

}
