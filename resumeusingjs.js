let resume={
    'name':{
        'first name':'Rahul',
        'last name ':'Gupta'
    },
    'phone number':"234093",
    'adress':"Mathura",
    "Dob":"18/06/2004",
    "About":"A highly skilled software engineer with 5+ years of experience in developing web applications and managing sothearo projects Proficient in various programming languages and frameworks, with a strong ability to solve complex problertes and deliver high-quality software solutions",
    "skill":["java","c","JAvascipt"],
    "Education":{"College":"Gla",
        "School":"saraswati vidya mandir"
    },
    "Senior Software Engineer":["Worked on various projects using Angular and Express js","Collaborated with designers to create user-friendly web interfaces"],
    



    
}


console.log(resume);
console.log(resume.Education.College);

const resumePretag=document.getElementById("resume");
resumePretag.innerText=JSON.stringify(resume,null,2);