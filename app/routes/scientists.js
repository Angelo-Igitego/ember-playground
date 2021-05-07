import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
	model(){
		return ['Marie Curie', 'Angelo Igitego', 'Islam Igitego', 'Albert Einstein']
	}
}
