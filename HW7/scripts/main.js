var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title,author,description,year)
    {
        this.title = title;
        this.author = author;
        this.description = description;
        this.year = year;

    }

    toString()
    {
        return "<b>Title:</b> " + this.title + '<br><b>Author:</b> ' + this.author + "<br><b>Description</b><br> " + this.description + "<br><b>Year:</b> " + this.year;
    }

    get theTitle()
    {
        return this.title;

    }
    get theAuthor()
    {
      return this.author;
    }
    get theDescription()
{
    return this.description;
}
  get theYear()
  {
    return this.year;
  }
}

function initializeArray()
{
    var myViewFinder = new ViewFinder("Smokey Dust", 'Space', "That fat rip was like exhaling sand-paper.", "4200");
    var myViewFinder1 = new ViewFinder("Someone Sneezed", 'Omnipotant Being', "It was a wicked sneeze.", "6600");
    var myViewFinder2 = new ViewFinder("Spilt Juice", 'Tommy Wiseau', "Truely out of this worrl, haha.", "2017");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);

}
function accessInformation()
{
    /// random object from the array
 var rnd = Math.floor( Math.random() * myViewFinderArray.length ); //incorporated other solution
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("title","author").innerHTML = myViewFinderArray[rnd].toString();

}
function imageArray() {
     myImages1 = new Array();
     myImages1[0] = "images/nebula1.png", console.log('Smokey Dust', 'Brought to you by Space');
     myImages1[1] = "images/nebula2.png", console.log('Spilt Juice', 'Brought to you by Tommy Wiseau');
     myImages1[2] = "images/nebula3.png", console.log('Sneezed', 'Brought to you by Omnipotant Being');
     var rnd = Math.floor( Math.random() * myImages1.length ); //incorporated other solution
     document.getElementById("image").innerHTML = "<img src='" + myImages1[rnd] + "' alt='image'></img>";
   }
