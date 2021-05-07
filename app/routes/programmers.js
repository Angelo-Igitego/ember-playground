import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
	model(){
		return ['Angelo Igitego', 'Laurier Kirenga', "Bwiza Agness", "Santana Laperle", "Charmant Igitego"]
	}
}
