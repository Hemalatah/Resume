/*
This is empty on purpose! Your code to build the resume will go here.
 */


$('#header').prepend(HTMLheaderRole).prepend(HTMLheaderName);
 
$('#topContacts').append(HTMLmobile).append(HTMLemail).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);

$('#footerContacts').append(HTMLmobile).append(HTMLemail).append(HTMLtwitter).append(HTMLgithub).append(HTMLlocation);

$('#header').append(HTMLbioPic).append(HTMLwelcomeMsg).append(HTMLskillsStart).append(HTMLskills);

$('#workExperience').append(HTMLworkStart);

$('.work-entry').append(HTMLworkEmployer).append(HTMLworkTitle).append(HTMLworkDates).append(HTMLworkLocation).append(HTMLworkDescription);

$('#projects').append(HTMLprojectStart);

$('.project-entry').append(HTMLprojectTitle).append(HTMLprojectDates).append(HTMLprojectDescription).append(HTMLprojectImage);

$('#education').append(HTMLschoolStart);

$('.education-entry').append(HTMLschoolName1).append(HTMLschoolDegree1).append(HTMLschoolDates1).append(HTMLschoolLocation1).append(HTMLschoolMajor1);
$('.education-entry').append(HTMLschoolName2).append(HTMLschoolDegree2).append(HTMLschoolDates2).append(HTMLschoolLocation2).append(HTMLschoolMajor2);

$('.education-entry').append(HTMLonlineClasses).append(HTMLonlineTitle).append(HTMLonlineDates).append(HTMLonlineSchool).append(HTMLonlineURL);

$('#mapDiv').append(googleMap);