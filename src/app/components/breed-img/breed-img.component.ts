import { Component, Input, OnInit } from '@angular/core';
import { fallbackUrl } from 'src/app/_global-consts';
import { ResponseAPI } from 'src/app/_global-type';
import { ListOfBreedsService } from 'src/app/_servicess/breeds.service';

@Component({
  selector: 'app-breed-img',
  templateUrl: './breed-img.component.html',
  styleUrls: ['./breed-img.component.scss'],
})
export class BreedImgComponent implements OnInit {
  @Input()
  breed: string = '';

  @Input()
  className: string = '';

  url: string = fallbackUrl;

  constructor(private _listOfBreedsService: ListOfBreedsService) {}

  ngOnInit(): void {
    this.breed &&
      this._listOfBreedsService
        .getImg(this.breed.replace(/ /g, '-').toLowerCase())
        .subscribe((res: ResponseAPI) => {
          if (res.status === 'success') this.url = res.message;
        });
  }
}
