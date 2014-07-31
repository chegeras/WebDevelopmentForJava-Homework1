/**
 * Created by nikolay on 31.07.2014.
 */
jQuery(function($)
{
    $.showItems = function showItems(template, dataUrl, parentContainer)
   {
        var compiledTemplate = Handlebars.compile(template.html());
       $.getJSON(dataUrl, function(data) {
           //headingContainer.text(data.heading);

           var date = new Date();
           $.each(data.items,function(index,value)
           {
                value.time = "Today " + date.toTimeString().replace(/.*(\d{2}:\d{2}).*/, "$1");
           });
           parentContainer.html('').append(compiledTemplate(data.items));
       }).fail(function( jqxhr, textStatus, error ) {
           var err = textStatus + ", " + error;
           console.log( "Request Failed: " + err );
       });
   }

    var template = $("#featured-products-list");
    var url = "assets/data/featured-products.json";
    var listContainer = $("#items-list");
    $.showItems(template,url,listContainer);

    $('#findBtn').on("click", function(){
        $('#featured-product-carousel').slideUp('slow', function(){
            $.showItems($('#search-products-list'), "assets/data/search-products.json",listContainer)
        });
        return false;
    });
});
