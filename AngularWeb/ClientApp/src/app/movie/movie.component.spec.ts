/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MovieComponent } from './movie.component';

let component: MovieComponent;
let fixture: ComponentFixture<MovieComponent>;

describe('Movie component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MovieComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MovieComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});