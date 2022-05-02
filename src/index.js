import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JS Basics</h1>'

function ShoppongList() {
	this.groceries = [];
}

ShoppongList.prototype.addItem = function (item) {
	this.groceries = this.groceries.concat([item]);
};

ShoppongList.prototype.removeItem = function (item) {
	this.groceries = this.groceries.filter(function(grocery) {
		return item !== grocery;
	})
}

var mylist = new ShoppongList();

mylist.addItem('Banana');
console.log(mylist.groceries);

mylist.removeItem('Banana');
console.log(mylist.groceries);

class ShoppongList2 {
	
	constructor() {
		this.groceries = [];
	}
	addItem(item) {
		this.groceries = [...this.groceries, item];
	}
	removeItem(item) {
		this.groceries = this.groceries.filter((grocery) => item !== grocery)
	}
}

const myNewList = new ShoppongList2();

myNewList.addItem('pizza');
console.log(myNewList.groceries);
myNewList.removeItem('pizza');
console.log(myNewList.groceries);




