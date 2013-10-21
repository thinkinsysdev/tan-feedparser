parser = Meteor.require('ortoo-feedparser');
var count = 0;
Posts.remove({});
console.log(Posts.find({}).count());
function getFeeds(url) {
  console.log(url);
   parser.parseUrl(url)
   .on('article', Meteor.bindEnvironment(function (article) {
     
     if(article.enclosures.length !== 0)
     {
      console.log(article.enclosures[0]); 
     }
     if (article.image.url)
     {
    // console.log(article.image.url);
     }
    //console.log(article.meta.link);
    Posts.insert(article, function(err, id)
                 {
                   if(!err)
                   {
             //        console.log('Post added:  ' + id);
                     count++ ;
              //       console.log('Count: ' +  count);
                    }
                 });
   }, function(e) { throw e;}))
   .on('end', function() {
      // console.log('Done with feed ' );
   }); 
}

var feeds = Feeds.find({}, {reactive: false}, {fields: {url: 1}});

if (feeds.count() > 0)
{
  feeds.forEach(function(feed) {
    console.log('Found url: ' + feed.url);
   getFeeds(feed.url);
  });
 console.log(Posts.find({}).count());
  
  
}