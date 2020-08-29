import './BBModel';
import BBModel from './BBModel';
import BBCollection from './BBCollection';

const bbModel = new BBModel({
  name: 'XXX',
  age: 20
});

const bbModelName: string = bbModel.get('name');
const bbModelAge: number = bbModel.get('age');

// bbModel.set('age', 'xxxx') // error
bbModel.set('age', 30); // ok

console.log(bbModel.showData());



const bbCollection = new BBCollection([
  { name: 'XXX', age: 20 },
  { name: 'YYY', age: 30 }
]);

const sum: number = bbCollection.getSumOfAllAges();

console.log(sum);

