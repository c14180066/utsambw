import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { GlobvarService, Photo } from '../globvar.service';
import { Observable } from 'rxjs';

interface Notes{
  Judul: string,
  Isi: string,
  Tanggal: string,
  Nilai: number,
  Gambar: string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  judul: string;
  isi : string;
  tanggal : Date;
  nilai: number;
  namaPhoto : string;
  uploadPhoto : Photo;
  isiData : Observable<Notes[]>;
  isiDataColl : AngularFirestoreCollection<Notes>;
  

  constructor(
    afs: AngularFirestore,
    public globvarService: GlobvarService,
    public afStorage : AngularFireStorage,
  ) {
    this.isiDataColl = afs.collection('dataNotes');
    this.isiData = this.isiDataColl.valueChanges();
  }



  getNama(Foto : Photo) {
    this.uploadPhoto = Foto;
    this.namaPhoto = Foto.filePath;
  }

  uploadGambar() {
    this.globvarService.tambahFoto();
  }

  uploadData() {
    const imgfilepath = `imgstorage/${this.judul}`;
    this.afStorage.upload(imgfilepath, this.uploadPhoto.dataImage).then((downloadURL)=> {
      console.log(downloadURL);
      alert("Berhasil");
    });
    this.isiDataColl.doc(this.judul).set({
      Judul: this.judul,
      Isi: this.isi,
      Tanggal: this.tanggal.toString(),
      Nilai: this.nilai,
      Gambar: this.uploadPhoto.filePath
    });
  }

}