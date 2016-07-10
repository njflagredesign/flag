var flagList = [
  {
    designer: "Nick Hawke and Andrew Maris",
    location:"Rumson and Fair Haven, NJ",
    image: "images/flag-11.jpg",
    description:"This flag uses the graphic story of the NJ militia uniform in " +
        " Andrew's original design and replaces with red and blue with the " +
        " traditional blue and buff New Jersey colors.",
    source: "original"
  },
  {
    designer: "Andrew Maris",
    location:"Fair Haven, NJ",
    image: "images/flag-1.jpg",
    description:"The flag is inspired by the Jersey Blues Revolutionary War " +
        "uniform. The militia wore a blue coat over a red waistcoat, often " +
        "accompanied by a white sash. Three colors and star represent the third " +
        "state to join the union and the first to ratify the Bill of Rights.",
    source: "njdotcomContest"
  },
  {
    designer: "Dan Shelffo",
    location:"South Orange, NJ",
    image: "images/flag-2.jpg",
    description:"The colors, which include N.J.'s official blue and buff uniform " +
        "colors chosen by George Washington, symbolize beaches, ocean, sky and the " +
        "state's woodlands. The pine cone represents trees that thrive in the pine " +
        "barrens through sheer resiliency.",
    source: "njdotcomContest"
  },
  {
    designer: "C. Erickson",
    location:"Morristown, NJ",
    image: "images/flag-3.jpg",
    description: "The rays come from a central point, like a lighthouse on the " +
        "shore or the Statue of Liberty. It also evokes the invention of the light " +
        "bulb. Three rays symbolizes N.J.'s status as the third state in the union.",
    source: "njdotcomContest"
  },
  {
    designer: "Marmocet",
    location:"Reddit user",
    image: "images/flag-4.jpg",
    description:"The cross shows N.J.'s heritage as an English colony. Buff and " +
        "blue are used on N.J.'s current flag. The shade of red was taken from " +
        "the cuffs and collars of NJ revolutionary war uniforms.",
    source: "njdotcomContest"
  },
  {
    designer: "Alan Hall",
    location:"Ontario, Canada",
    image: "images/flag-5.jpg",
    description:"The borders between the buff and blue are cut to resemble an " +
        "outline of the state. The torch is a simplified version of the one held " +
        "by the Statue of Liberty. The three flames signify New Jersey's place " +
        "as the third state.",
    source: "njdotcomContest"
  },
  {
    designer: "Andrew Zega",
    location:"Paris",
    image: "images/flag-6.jpg",
    description:"The band of buff represents the golden fields of the Garden State. " +
        "The blue is the sky and the seven-pointed white sun recalls the crown " +
        "of the Statue of Liberty",
    source: "njdotcomContest"
  },
  {
    designer: "Andrew Jones",
    location: "Perth, Australia",
    image: "images/flag-7.jpg",
    description: "The cross reflects the flag of the isle of Jersey, from which  " +
        "New Jersey takes its name. The rest is from the current New Jersey flag.",
    source: "njdotcomContest"
  },
  {
    designer: "Kenneth Huang",
    location:"Kenneth Huang, NJ",
    image: "images/flag-8.jpg",
    description:"The yellow and blue harken back to the original state flag, " +
        "while the flame symbolizes knowledge, liberty, and power.",
    source: "njdotcomContest"
  },
  {
    designer: "Dave Martucci",
    location:"formerly of Wharton",
    image: "images/flag-9.jpg",
    description:"This flag is based on New Jersey's current flag, but I condensed " +
        "the design down to just the three plows on blue from the current arms. A " +
        "Revolutionary War N.J. flag reportedly just had the three plows and a " +
        "horse's head on it.",
    source: "njdotcomContest"
  },
  {
    designer: "Joe Conklin",
    location:"Pitman, NJ",
    image: "images/flag-10.jpg",
    description:"The traditional colors of New Jersey on a standard three-stripe " +
        "banner. Thirteen stars represent our original colonies.",
    source: "njdotcomContest"
  },
  {
    designer: "",
    location:"",
    image: "images/100-best.jpg",
    description:"",
    showLink: true,
    source: "njdotcomContest"
  }
];

function ViewModel(){

  var self = this;

  self.flags = ko.observableArray();
  self.designer = ko.observable();
  self.location = ko.observable();
  self.image = ko.observable();
  self.description = ko.observable();
  self.showLink = ko.observable(false);
  self.contest = ko.observable(false);
  self.original = ko.observable(false);

  flagList.forEach( function( flag ){
    self.flags.push( flag );
  });

  self.openModal = function( flag ){
    self.designer( flag.designer );
    self.location( flag.location );
    self.image( flag.image );
    self.description( flag.description );
    self.showLink(flag.showLink);
    self.contest( flag.source === "njdotcomContest" );
    self.original(  flag.source === "original" );
    $('#flag-modal').modal();
  };

}

ko.applyBindings( new ViewModel());