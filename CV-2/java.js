// resutrn text through a json file (this bc we need to write a http file )
// need to access data through a server in order to retrive(read) a JSON file 
// ex have to test through a local server 

"use strict";

fetch ("../resume.json")
    .then (function(resp){
        return resp.json (); // reciving the text and then converting it 
    }
    ) 

    .then (function(data) {
        console.log (data.education.schools);
        const educationContainer = document.getElementById("education");
        data.education.schools.forEach(school =>
           {
          const paragraph = document.createElement("p");
          paragraph.textContent = school.institution;
          paragraph.classList.add("skolNamn")
          educationContainer.append(paragraph)
        }  )
      }
    )

    fetch ("../resume.json")
    .then (function(resp){
        return resp.json (); // reciving the text and then converting it 
    }
    ) 

    .then (function(data) {
      console.log (data.education.schools);
      const educationContainer = document.getElementById("program");
    data.education.schools.forEach(school =>
      {
     const paragraph = document.createElement("p");
     paragraph.textContent = school.degree;
     paragraph.classList.add("DegreeName")
     educationContainer.append(paragraph)
    }  )
  }
)

fetch ("../resume.json")
.then (function(resp){
    return resp.json (); // reciving the text and then converting it 
}
) 

.then (function(data) {
  console.log (data.education.schools);
  const educationContainer = document.getElementById("year");
data.education.schools.forEach(school =>
  {
 const paragraph = document.createElement("p");
 paragraph.textContent = school.graduationyear;
 paragraph.classList.add("GradYear")
 educationContainer.append(paragraph)
}  )
}
)

fetch ("../resume.json")
.then (function(resp){
    return resp.json (); // reciving the text and then converting it 
}
) 

.then (function(data) {
  console.log (data.work);
  const workContainer = document.getElementById("experience-work");
data.work.forEach(work =>
  {
 const paragraph = document.createElement("p");
 paragraph.textContent = work.experience;
 paragraph.classList.add("WorkExp")
 workContainer.append(paragraph)
}  )
}
)
/*
    .then (function(data) {
      console.log (data.skills);
      const educationContainer = document.getElementById("program");

  
  } 
  
  ) */

    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

