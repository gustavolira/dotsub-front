import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {UploadService} from '../service/upload.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {

  public uploader: FileUploader = this.service.getFileUploader();


  constructor(private service: UploadService)   { }

  ngOnInit() {
    this.uploader.onErrorItem = (item, response) => {
      Swal('', 'File could not be uploaded', 'error');
    };
    this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {
      Swal('', 'File uploaded successfully', 'success');

    };

  }

}
