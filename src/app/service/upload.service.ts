import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {FileUploader} from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  getFileUploader() {
    return new FileUploader({url: `${environment.baseURL}/api/upload`});
  }
}
