
$(document).ready(function(){

    updateGroups();

    $('#add-box .col-right').on('click', function() {
        var newItem = $('#new-item').val();
        addNewItem(newItem);
    })

    $(document).keydown(function(e) {
        if (e.keyCode == 13) {
            var newItem = $('#new-item').val();
            addNewItem(newItem);
        }   
    })

    $('#need').on('click', '.check', function() {
        checkItem(this);
    })

    $('#got').on('click', '.check', function() {        
        uncheckItem(this);
    })

    $('.grocery-list').on('click', '.remove', function() {
        removeItem(this);
    })

});


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

var combineItems = function(name,qty,group) {
    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
    var target = $("#" + group + " .name:contains('"+name+"')").parent().find('.qty');
    var currentQty = target.text();
    currentQty = parseInt(currentQty) + qty;
    target.text(currentQty);
}

var addNewItem = function(name) {
    name = name.trim();
    if (name != "") {
        if (duplicateExists(name,"need")) {
            combineItems(name,1,"need");    
        } else {
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
        $('#new-item').val('');
    } else {
        alert("UH OH!\n\n The add new item box is empty.\n Please enter a name and try again. ");
    }
}

var removeItem = function(x) {
    $(x).parent().fadeOut(600, function() {
        $(x).parent().remove();
        updateGroups();
    })
}

var checkItem = function(x) {
    var node = $('<i class="fa fa-check-square-o">');
    $(x).find('.fa').remove();
    $(x).append(node);
    var item = $(x).closest('.item');
    var itemName = item.find('.name').text();
    var itemQty = parseInt(item.find('.qty').text());
    var itemNode = item.get(0);
    item.fadeOut(800, function() {
        item.remove();
        updateGroups();
        if (duplicateExists(itemName,"got")) {
            combineItems(itemName,itemQty,"got");
        } else {
            $('#got').find('.grocery-list').first().prepend(itemNode);
            $('#got').find('.item').first().fadeIn(800, function(){
                updateGroups();
            });
        }
    });
}

var uncheckItem = function(x) {
    var node = $('<i class="fa fa-square-o">');
    $(x).find('.fa').remove();
    $(x).append(node);
    var item = $(x).closest('.item');
    var itemName = item.find('.name').text();
    var itemQty = parseInt(item.find('.qty').text());
    var itemNode = item.get(0);
    item.fadeOut(800, function() {
        item.remove();
        updateGroups();
        if (duplicateExists(itemName,"need")) {
            combineItems(itemName,itemQty,"need");
        } else {
            $('#need').find('.grocery-list').first().prepend(itemNode);
            $('#need').find('.item').first().fadeIn(800, function(){
                updateGroups();
            });
        }
    });    
}
