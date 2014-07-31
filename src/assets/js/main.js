/**
 * Created by nikolay on 31.07.2014.
 */
jQuery(function($)
{
    $.showItems = function showItems(template, dataUrl, parentContainer)
   {
       console.debug("start compile template");
        var compiledTemplate = Handlebars.compile(template.html());
       console.debug("finish compile template");
       $.getJSON(dataUrl, function(data) {
           //headingContainer.text(data.heading);
           parentContainer.html('').append(compiledTemplate(data.items));
       }).fail(function( jqxhr, textStatus, error ) {
           var err = textStatus + ", " + error;
           console.log( "Request Failed: " + err );
       });
   }

    var template = $("#featured-products-list");
    var url = "assets/data/featured-products.json";
    var parentContainer = $("#items-list");
    $.showItems(template,url,parentContainer);
});