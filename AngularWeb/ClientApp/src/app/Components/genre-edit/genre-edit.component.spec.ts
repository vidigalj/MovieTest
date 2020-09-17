/// <reference path="../../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { GenreEditComponent } from './genre-edit.component';

let component: GenreEditComponent;
let fixture: ComponentFixture<GenreEditComponent>;

describe('genreEdit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GenreEditComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(GenreEditComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});