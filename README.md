# Interactive Frontend Development Mini-Project

# Photograper’s Sun Position Application

# Description

This application is designed for photographers to allow the Sun Position to be shown on Google Maps at a particular location at a particular time.

To obtain the proper lighting for a photograph a photographer needs to know the position of the sun in the sky in relation to what he's trying to photograph.

If a photographer goes to photograph a tourist location like the Sphinx for example he will want to know when the sun will be in the right position to 
light up is face with side frontal lighting to reveal the detail. Tourist attractions near the current locaion can be displayed to give a photographer other
options to photograph.

When photographing a landcape the best time is in what is called the Golden Hour, the hour after sunrise and the hour before sunset. It is advantageous to know 
where and when the sun will rise and set and this can be displayed on a Google Map for the current location and time as well as the current location of the Sun.

A photographer can use this application to plan ahead for a trip to determine when to be at a location to take advantage of the best light. 
The photographer would enter a location a future date and/or time and view the Sunset /Sunrise locations and time and where the sun will be in position at any given time
to allow the photographerto setup beforehand and be ready for the right moment, sometimes it is only when you arrive at a location and see the terrain can you determine
the best shot and this application will put you in the best possible position to do this.

# Sequence of Events

This is a guide to the user interaction. The following describes the actions expected to be performed by the user and the expected sequence 
of these actions. Also the expected information to be diplayed on the screen.

The user has the choice to either use their current location by clicking on a Current Location Radio Button (Current Location retrieved using Geolocation for example) 
or the user can enter and search for a location.

The Current Location button will automatically display the Current Location in Google Maps.

Otherwise once a Location is entered and the ‘Location’ button is clicked, the Location will be displayed in Google Maps.

There is also an option to search using Lattitude and Longitude as photographers sometimes use Ordnance Survey Maps to look for Locations and the Lattitude and Longitude
of these locations might not be near an actual location that can be entered.

The user will then select a Date and/or Time from a list.

There is also a button called ‘Now’ which will allow the user to select the current Date and Time instead of entering a Date and Time.

Once a Location and a Date and time is entered, the Sun Position will be displayed on the Google Map 

The positions and times of the Sunrise and Sunset for the Current Location are also retrieved and displayed on the Map.

Nearby Tourist Destinations will also be retrieved and these are displayed on the Map.

Any changes to the Location and Date and Time will be updated on the Google Map, displaying the new Sun Positions and Tourist Destinations.

# Technologies Used

The Technologies used in this project are as follows:

## HTNL5

HTML5 was used for the structure and presentation of the.Web Page including text fields and buttons.

## CSS3

CCS3 was used to for the presentation of the web page to custoimise the look and feel of the page

## Bootstrap

Botstrap was used to create a responsive design, ensuring the entry fields and buttons scale to the screen and to ensure
maximum use of avalable area of the screen for the Google Map.

## Javascript

Javascript was used for the following:

### Date Time List

The Date/ Time Pick List was created by calling a Javascript library class **bootstrap-datetimepicker** which is responsive (Bootstrap Class)

### Google Maps

Google Maps was displayed using a Javascript API call to the Google Maps Object and then a Javascript file is called
to obtain urther location details

### Sun Position

By passing parameters to the SunCalc API, the Sun Position, Sunrise position and Sunset position are calculated
and the results are graphically display them on the Google Map.

### Tourist Destinations

Tourist Destinations will also be retrieved using a Google Maps API which access a Places Library and these are displayed on the Map.

# Deployment