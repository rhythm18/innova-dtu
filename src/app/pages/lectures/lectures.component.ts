import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  moduleId: module.id,
  selector: 'lectures-cmp',
  templateUrl: 'lectures.component.html',
  styleUrls: ['lectures.component.css']

})
export class LecturesComponent implements OnInit {
  closeResult = '';
  constructor(private modalService: NgbModal) {}


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit(): void 
  {


  }
}

