import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
	providedIn: 'root' //El servidio se puede usar en toda la app.
})
export class DbzService {
	public characters: Character[] = [
		{
			id: uuid(),
			name: 'Krillin',
			power: 1000
		},
		{
			id: uuid(),
			name: 'Goku',
			power: 9500
		},
		{
			id: uuid(),
			name: 'Vegeta',
			power: 7500
		}
	];

	addNewCharacter(emittedCharacter: Character): void {
		const newCharacter: Character = { ...emittedCharacter, id: uuid() };
		this.characters.push(newCharacter);
	}

	deleteCharacterById(emittedId: string): void {
		this.characters = this.characters.filter(
			(character) => character.id !== emittedId
		);
		console.log(this.characters);
	}
}
