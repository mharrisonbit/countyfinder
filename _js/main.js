$('document').ready(function(){
  document.getElementById("entry").focus();
  predictive();
  function predictive() {
      console.log("Predictive fired");
  var availableCounties = [
    "Adair",
    "Allen",
    "Anderson",
    "Ballard",
    "Barren",
    "Bath",
    "Bell",
    "Boone",
    "Bourbon",
    "Boyd",
    "Boyle",
    "Bracken",
    "Breathitt",
    "Breckinridge",
    "Bullitt",
    "Butler",
    "Caldwell",
    "Calloway",
    "Campbell",
    "Carlisle",
    "Carroll",
    "Carter",
    "Casey",
    "Christian",
    "Clark",
    "Clay",
    "Clinton",
    "Crittenden",
    "Cumberland",
    "Daviess",
    "Edmonson",
    "Elliott",
    "Estill",
    "Fayette",
    "Fleming",
    "Floyd",
    "Franklin",
    "Fulton",
    "Gallatin",
    "Garrard",
    "Grant",
    "Graves",
    "Grayson",
    "Greene",
    "Greenup",
    "Hancock",
    "Hardin",
    "Harlan",
    "Harrison",
    "Hart",
    "Henderson",
    "Henry",
    "Hickman",
    "Hopkins",
    "Jackson",
    "Jefferson",
    "Jessamine",
    "Johnson",
    "Kenton",
    "Knott",
    "Knox",
    "LaRue",
    "Laurel",
    "Lawrence",
    "Lee",
    "Leslie",
    "Letcher",
    "Lewis",
    "Lincoln",
    "Livingston",
    "Logan",
    "Lyon",
    "Madison",
    "Magoffin",
    "Marion",
    "Marshall",
    "Martin",
    "Mason",
    "McCracken",
    "McCreary",
    "McLean",
    "Meade",
    "Menifee",
    "Mercer",
    "Metcalfe",
    "Monroe",
    "Montgomery",
    "Morgan",
    "Muhlenberg",
    "Nelson",
    "Nicholas",
    "Ohio",
    "Oldham",
    "Owen",
    "Owsley",
    "Pendleton",
    "Perry",
    "Pike",
    "Powell",
    "Pulaski",
    "Robertson",
    "Rockcastle",
    "Rowan",
    "Russell",
    "Scott",
    "Shelby",
    "Simpson",
    "Spencer",
    "Taylor",
    "Todd",
    "Trigg",
    "Trimble",
    "Union",
    "Warren",
    "Washington",
    "Wayne",
    "Webster",
    "Whitley",
    "Wolfe",
    "Woodford"
  ];
  $( "#entry" ).autocomplete({
    source: availableCounties
  });
};
    
    
  $("#form1").submit (function(event){
    event.preventDefault();
    console.log("pressed");
    getCounty();
          
  });

});

function getCounty() {
  document.getElementById("entry").focus();

  var city = document.getElementById("entry").value;
  var current_city = city.toLowerCase();
    
  if (current_city == "larue"){
      current_city="LaRue";
  };
  
  if (current_city == "mccracken"){
      current_city="McCracken";
  };
  
  if (current_city == "mccreary"){
      current_city="McCreary";
  };
  if (current_city == "mclean")
  {
      current_city="McLean";
  };


  var playListURL = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles="+ current_city+ "_County,_Kentucky&prop=extracts&exintro=&explaintext=&callback=?";
  var imagesArray = "http://en.wikipedia.org/w/api.php?format=json&action=query&titles="+ current_city+ "_County,_Kentucky&prop=pageimages&thumbnail&pithumbsize=250&callback=?";
  console.log(imagesArray);

$.getJSON(playListURL ,function(data) {
  $.each(data.query.pages, function(i, item) {
    
    if (i==-1) {
      $("#entry").val('');
      document.getElementById("weatherField").innerHTML ="Please Enter a Kentucky County!";
    }

    else{
    var text = item.extract;
    var carat = text.indexOf('^');
    text = text.substring(0, carat != -1 ? carat : text.length);
    $("#entry").val('');
    document.getElementById("weatherField").innerHTML =text;
    

    }
  });

});

$.getJSON(imagesArray ,function(data) {
  $.each(data.query.pages, function(i, item) {
    
    if (i==-1) {
      document.getElementById("picField").innerHTML ="";

    }

    else{
      var pic = item.thumbnail.source;
      console.log(pic);
      $("#entry").val('');
      document.getElementById("picField").innerHTML ="<img class='col-sm-12 col-xs-12' src='"+pic+"' alt='" +pic+ "'><p></p>";

    }
  });

});

  document.getElementById("entry").focus();

}




