
$(document).ready(function(){

    updateTotal("need");
    updateTotal("got");

    $('#need').on('click', '.check', function() {        
        var node = $('<i class="fa fa-check-square-o">');
        $(this).find('.fa').remove();
        $(this).append(node);
        var item = $(this).closest('.item');
        var itemNode = item.get(0);
        item.fadeOut(800, function() {
            item.remove();
            updateTotal("need");
            $('#got').find('.grocery-list').first().prepend(itemNode);
            $('#got').find('.item').first().fadeIn(800);
            updateTotal("got");
        });
    })

    $('#got').on('click', '.check', function() {        
        var node = $('<i class="fa fa-square-o">');
        $(this).find('.fa').remove();
        $(this).append(node);
        var item = $(this).closest('.item');
        var itemNode = item.get(0);
        item.fadeOut(800, function() {
            item.remove();
            updateTotal("got");
            $('#need').find('.grocery-list').first().prepend(itemNode);
            $('#need').find('.item').first().fadeIn(800);
            updateTotal("need");
        });         
    })

    $('#need').on('click', '.remove', function() {
        $(this).parent().remove();
        updateTotal("need");
    })

    $('#got').on('click', '.remove', function() {
        $(this).parent().remove();
        updateTotal("got");
    })

    $('#add-box .col-right').on('click', function() {
        var name = $('#new-item').val();
        // TODO - trim whitespace from user input.
        // TODO - reject empty user input.
        if (name != "") {
            if (duplicateExists(name)) {
                console.log("Item is already on the need list - so will increase qty.");
                // TODO - add qty increase code.
            } else {
                addNewItem(name);   
            }
            $('#new-item').val('');
            updateTotal("need");
        }
    })
});
function duplicateExists(name) {
    if ($('#need').find('.name').filter( function(){
        return $(this).text().toLowerCase() === name.toLowerCase();  
    }).length > 0) {
        return true;
    } else {
        return false;
    }
}
function addNewItem(name) {
    var newNode = $('<div class="item hidden"><div class="col-left check"><i class="fa fa-square-o"></i></div><div class="col-middle"><span class="name">'+name+'</span> &times; <span class="qty">'+1+'</span></div><div class="col-right remove"><i class="fa fa-times-circle"></i></div></div>');
    $('#need').find('.grocery-list').first().prepend(newNode);
    $('#need').find('.item').first().fadeIn(800);
}
function Total(type) {
    return $("#" + type).find(".item").length;
}
function updateTotal(type) {
    var total = Total(type);
    if (total > 0) {
        $("#" + type).find(".total").text(total);
        $("#" + type).find(".empty").hide();   
    } else {
        $("#" + type).find(".total").text(total);
        $("#" + type).find(".empty").show();
    }
} 
