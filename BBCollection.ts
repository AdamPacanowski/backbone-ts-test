import Backbone from 'backbone';
import BBModel from './BBModel';

class BBCollection extends Backbone.Collection<BBModel> {
  getSumOfAllAges() {
    return this.reduce((sum, model) => {
      return model.get('age') + sum;
    }, 0);
  }
}

export default BBCollection;
