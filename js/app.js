

var initialCats = 
     [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: 'liza'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
			nicknames: 'piza'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
			nicknames: 'pica'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
			nicknames: 'mica'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
			nicknames: 'foo'
        }
    ]
	
var imageBinder = function() {
	
}	

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observable(data.nicknames);
	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();
		if(clicks < 10) {
		title = 'newborn'; }
		 else if(clicks < 50) {
			 title = 'GrownUp';
		 } else if (clicks < 100) {
			 title = "old";
		 } else {
			 title = 'ninja';
		 }
		 return title;
	}, this);
};

var viewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(cat) {
		self.catList.push(new Cat(cat));
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	this.incrementCounter = function() {
	this.clickCount(this.clickCount() +1); };
	
	this.setCount = function(catClicked) {
		self.currentCat(catClicked);
	};
};

 ko.applyBindings(new viewModel());