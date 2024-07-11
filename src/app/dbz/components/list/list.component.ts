import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ListComponent {
	@Output()
	public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

	@Input()
	public characterList: Character[] = [];

	onDeleteCharacter(characterSelected?: string): void {
		console.log(characterSelected);
		if (!characterSelected) return;
		this.onDeletedCharacter.emit(characterSelected);
	}
}
