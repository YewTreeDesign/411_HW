var db = [
  function myChanger() {
      document.getElementById("text").innerHTML = "So you wanna slay a dragon? Good! Now, where do dragons live? " +
      "Caves, usually- or perhaps the old abandoned castle? Before we figure out where to go- what is your name?";
      document.getElementById("img").src = "https://media.giphy.com/media/KyaUq9qT3WGMU/giphy.gif";
      document.getElementById("quote").innerHTML= "";
      //changes text of buttons
      document.getElementById("leftButton").innerHTML="Enter Name?";
      document.getElementById("rightButton").innerHTML="Give Up!";
      //changes the function the buttons use
      document.getElementById( "leftButton" ).setAttribute( "onClick", "javascript: myChanger4();" );
      document.getElementById( "rightButton" ).setAttribute( "onClick", "javascript: myEnding7();" );

  {

    "question": "<b>From where he stand, there is a door way. To the right, there is a mirror.</b>",
    "answers":



       [

      {
        "title": "Go through the doorway.",
        "response": 1
      },


      {
        "title": "Look into the mirror.",
        "response": 2
      },
    ]

  }, {

    "question": "<b> As he was approaching the doorway, he asked himself: <i> Why Would I want to do that?</i></b>",

    "answers":
    document.getElementById("img").src = "scene/storyboard-02.png";

    [

      {
        "title": "Go back.",
        "response": 0
      },

    ]
  },

  {
    "question": "<b>He looks at himself and sees that he appear to be a blue-haired man. For some reason the man feels unsettled with the reflection that's being projected.</b>",
    "answers": [{
      "title": "Check pockets",
      "response": 3
    }]
  },
  {
    "question": "<b>In his pockets there's a wallet, small note-book and a watch. The Watch isn't working, so he puts the watch away. </b>",
    "answers": [{
        "title": "Check wallet.",
        "response": 4
      },
      {
        "title": "Check the note-book.",
        "response": 6
      },
    ]
  },

  {
    "question": "<b> When he opened the wallet; The man found an answer as to why he has a disembodied feeling when faced with the refection. The man's appearance changed entirely. The ID photo presents a more mundane appearance. The name is Dimitri Zimmerman.</b>",
    "answers": [{
      "title": "Check the note-book.",
      "response": 5
    }, ]
  },

  {
    "question": "<b> While putting the wallet back in his pocket, he began flipping through the pages.</b>",
    "answers": [

      {
        "title": "...How odd",
        "response": 6
      },
    ]
  },

  {
    "question": "<b>There appears to be some sort of writing with in the pages that he can't comprehend. Dim raffled through the pages to find anything legable.</b>",
    "answers": [{
      "title": "Keep Looking",
      "response": 7
    }, ]
  },
  {
    "question": "<b> Dimitri continue to flip through the illegable pages. On the last page you are able read what's written.</b>",

    "answers": [

      {
        "title": "Read.",
        "response": 8
      },


    ]

  },

  {
    "question": "<b> Crudely written in red-ink, it read:<br> <i> I have gone beyond than any mortal should, I might lose my mind or something once making contact with the Black Lodge... Remember I am looking for ----- R---. I must not forget why I am here, so I have this note-book to remember if I were to become lost. I must apprehend that murder.</i> Where the name should be displayed, it's the same incohearent scribbles on the pages before.</b>",

    "answers": [

      {
        "title": "Put the note-book away.",
        "response": 9
      },

    ]


  },

  {
    "question": " <b> After putting the note book away, Dimitri stepped away from the mirror and looked over to the doorway, still hazed with the details of why he is here. All that Dimitri knows that he's a Detective who's after a murder.</b>",
    "answers": [

      {
        "title": "Leave the room.",
        "response": 10
      },

    ]



  },


  {
    "question": "<b>To be Continued...</b>",


  },

];


var currentLocation = 0;

window.printCurrentLocation = function() {
  document.getElementById("question").innerHTML = db[currentLocation].question;
  document.getElementById("myImage").src = "scene/" db[currentLocation].myImage;
  document.getElementById("myGif").src = "scene/" db[currentLocation].myGif;
  var answers = "";
  for (var i = 0, l = db[currentLocation].answers.length; i < l; i++) {
    answers += "<p><button onclick='setLocation(" + db[currentLocation].answers[i].response.myImage[i].myGif[i] + ")'>" + db[currentLocation].answers[i].title + "</button></p>";
  }
  document.getElementById("answers").innerHTML = answers;
}

window.setLocation = function(num) {
  currentLocation = num;
  window.printCurrentLocation();
}

window.printCurrentLocation();
