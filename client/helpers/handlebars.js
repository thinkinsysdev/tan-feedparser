Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});
Handlebars.registerHelper('removeImgTag', function(text) {
	if (text)
  {
	if(text.indexOf("<img") > 0) {
		return text.split('<')[0];
	}
  }
	});
Handlebars.registerHelper('checkImage', function(img1, img2) {
  if(img1)
    return img1;
  else 
    return img2;
});
sayHelloWorld = function() 
{
   return ('Hello Beautiful'); 
}