import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  Judul;
  Isi;
  Nilai;
  Tanggal;
  Gambar;
  constructor(private route:ActivatedRoute) {
    const parameter = this.route.snapshot.paramMap;
    this.Judul = parameter.get('judul');
    this.Isi = parameter.get("isi");
    this.Nilai = parameter.get("nilai");
    this.Tanggal = parameter.get("tanggal");
    this.Gambar = parameter.get("gambar");
   }

}
