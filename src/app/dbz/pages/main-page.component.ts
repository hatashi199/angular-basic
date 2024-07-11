import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
	selector: 'app-dbz-main-page',
	templateUrl: 'main-page.component.html'
})
export class MainPageComponent {
	constructor(private dbzService: DbzService) {}
	/**
	 * Una buena práctica es la de injectar los servicios
	 * de forma privada y crear los getter necesarios.
	 */

	get characters(): Character[] {
		return [...this.dbzService.characters];
	}

	onDeleteCharacter(id: string): void {
		this.dbzService.deleteCharacterById(id);
	}

	onNewCharacter(character: Character) {
		this.dbzService.addNewCharacter(character);
	}
}
