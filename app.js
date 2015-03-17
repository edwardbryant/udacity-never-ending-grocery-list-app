
$(document).ready(function(){
    updateGroups();

    $('#need').on('click', '.check', function() {      
        var node = $('<i class="fa fa-check-square-o">');
        $(this).find('.fa').remove();
        $(this).append(node);
        var itemName = $(this).parent().find('.name').text();
        var item = $(this).closest('.item');
        var itemNode = item.get(0);
        item.fadeOut(800, function() {
            item.remove();
            if (duplicateExists(itemName,"got")) {
                console.log("found same item in got list.");
                increaseQty(itemName,"got");

            } else {
                // addNewItem(name);
                console.log("no dup conflict found");
            }
            

            updateGroups();
            $('#got').find('.grocery-list').first().prepend(itemNode);
            $('#got').find('.item').first().fadeIn(800);
            updateGroups();
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
            updateGroups();
            $('#need').find('.grocery-list').first().prepend(itemNode);
            $('#need').find('.item').first().fadeIn(800);
            updateGroups();
        });         
    })

    $('#need').on('click', '.remove', function() {
        $(this).parent().fadeOut(600, function() {
            $(this).remove();
            updateGroups();
        })
    })

    $('#got').on('click', '.remove', function() {
        $(this).parent().fadeOut(600, function() {
            $(this).remove();
            updateGroups();
        })
    })

    $('#add-box .col-right').on('click', function() {
        var name = $('#new-item').val();
        // TODO - trim whitespace from user input.
        if (name != "") {
            if (duplicateExists(name,"need")) {
                increaseQty(name,"need");    
            } else {
                addNewItem(name);   
            }
            $('#new-item').val('');
        } else {
            // TODO - error message that input is empty.
        }
    })
});

// ------ clean ---------

var updateGroups = function() {
    var groups = ["need","got"];
    for (i=0;i<groups.length;i++) {
        var group = groups[i];
        var total = $('#' + group).find(".item").length;    
        if (total > 0) {
            $('#' + group).find(".total").text(total);
            $('#' + group).find(".empty").hide();   
        } else {
            $('#' + group).find(".total").text(total);
            $('#' + group).find(".empty").show();
        }
    }
}
var duplicateExists = function(name,group) {
    if ($('#' + group).find('.name').filter( function(){
        return $(this).text().toLowerCase() === name.toLowerCase();  
    }).length > 0) {
        return true;
    } else {
        return false;
    }
}
var increaseQty = function(name,group) {
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    var target = $("#" + group + " .name:contains('"+name+"')").parent().find('.qty');
    var qty = target.text();
    qty = parseInt(qty) + 1;
    target.text(qty);
}
var addNewItem = function(name) {
    var newNode = $(' '
        + ' <div class="item hidden"> '
        + '    <div class="col-left check"><i class="fa fa-square-o"></i></div> '
        + '    <div class="col-middle"><span class="name">' + name + '</span> &times; <span class="qty">' + 1 + '</span></div> '
        + '    <div class="col-right remove"><i class="fa fa-times-circle"></i></div> '
        + ' </div> ');
    $('#need').find('.grocery-list').first().prepend(newNode);
    $('#need').find('.item').first().fadeIn(800, function(){
        updateGroups();
    });
}
