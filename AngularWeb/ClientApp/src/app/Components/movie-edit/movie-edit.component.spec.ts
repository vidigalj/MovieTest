/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MovieEditComponent } from './movie-edit.component';

let component: MovieEditComponent;
let fixture: ComponentFixture<MovieEditComponent>;

describe('movieEdit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MovieEditComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MovieEditComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});