# SnackBar JS.
Material Desgin Snackbars with Callbacks and Actions. With the new Kabeers Snackbar JS. Dependancy Free. Small and easy to use


### Introduction
Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

More Information and Documentation about Snackbars at [material.io/components/snackbar](https://material.io/components/snackbars#anatomy)

### Get SnackBar JS
SnackBar JS is available from JS Delivr, Kabeers CDNs, and Our AJAX Libraries Registery
Snackbar Requires JS files plus its Custom CSS files (Snackbar CSS)

Kabeers Network CDN Page [Here](http://kabeersnetwork.dx.am/cdn?item=kabeers+Snackbar%20js)

AJAX Libs CDNs (Kabeers Network NPM Registery) Click [Here](http://ajax-libs.kabeersnetwork.rf.gd/)

JS Deliever [Here](https://cdn.jsdelivr.net/gh/kabeer11000/snackarjs@master/dist/snackbar.min.js)

### Usage
K Avatar Js doesnot need extra JS code to instantiate. Just Call Snackbar Function
CallbackFunction, Message are Important. Others are Optional Parameters

###Basic Syntax

```
Snackbar({message: "Snackbar message", actiontext: 'Button Text', time:500}, CallbackFunction, beforeShowFunction, afterShowFunction)
```


### Examples
Snackbar Supports Both Vanilla Javascript Jquery or any other Selector Engine,

```<script>

//Vanilla Javascript

document.querySelector(".one").addEventListener("click", () => {
  Snackbar({ message: "Hello! I am a Simple & Plain Snackbar!"});
});

document.querySelector(".two").addEventListener("click", () => {
	Snackbar({
		message: "Hello! I am a Snackbar with All Features Possiable!",
		actiontext: "Redo", 
		time:500
	}, () => {
		alert("Snackbar Action Button Clicked");
	}, () => {
		console.log('beforeShow')
	}, () => {
		console.log('AfterShow')
	});
});

//JQuery

$(".one").on("click", () => {
  Snackbar({ message: "Hello! I am a Simple & Plain Snackbar!"});
});

$(".two").on("click", () => {
	Snackbar({
		message: "Hello! I am a Snackbar with All Features Possiable!",
		actiontext: "Redo", 
		time:500
	}, () => {
		alert("Snackbar Action Button Clicked");
	}, () => {
		console.log('beforeShow')
	}, () => {
		console.log('AfterShow')
	});
});


</script>```

### Tips
```Snackbar({messange: "Snackbar message", actiontext: 'Button Text'}, async () => {
	alert('CallBack Functions Can Be Called Async!')
}))```

### ES5 Support
```Snackbar({messange: "Snackbar message", actiontext: 'Button Text'}, async function () {
	alert('CallBack Functions Can Be Called Async!')
}))
```
### Import as UMD Module (ES6 Modules)
```import {Snackbar} from './path/to/snackbar.umd.js';```

### Change Snackbar Action Color (CSS)
```:root{
    --snackbar_action : red;
}```
```
Want beter Documentation? [kabeersnetwork.dx.am/apis#item-14](http://kabeersnetwork.dx.am/apis#item-14)
