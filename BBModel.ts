import Backbone from 'backbone';

interface BBModelInitialData {
  name: string;
  age: number;
}

class BBModel extends Backbone.Model<BBModelInitialData> {
  showData() {
    return `${ this.get('name') } - ${ this.get('age') }`;
  }
}

export default BBModel;
