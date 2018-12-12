import { Component,  Input, SimpleChanges, TemplateRef } from '@angular/core';
import {Images} from '../models/Images.model';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Photographers} from '../models/photographer';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EventsService} from 'src/app/services/events.service';
@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css'],
  animations: [
    trigger('chn', [
      state('open', style({ })
      ),
      state('close', style({
        position: 'absolute',
        transform: 'translateY(0px)'
      })),
      transition('open <=> closed', [
        animate('10s ease-out', style({position: 'absolute', transform: 'translateY(20px)'}))
      ])
    ])
  ]
})
export class PProfileComponent  {
  constructor(private modalService: BsModalService, private es: EventsService) { }
  modalRef: BsModalRef;
  photographer:  Photographers ;
  images: Images[] = [  ];
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
    // return this.es.getimages().subscribe();
  }

