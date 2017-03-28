
$.getJSON("https://api.github.com/repos/fw4spl-org/fw4spl-dox/branches", function (branches) {
    var cdn = "https://rawgit.com/fw4spl-org/fw4spl-dox/$BRANCH/index.html";
    $('#content').empty();
    for (var i = 0; i < branches.length; i++) {
        var name = branches[i].name;
        if(name !== "gh-pages"){
            var printName = name.toUpperCase().replace("_", "&nbsp;");
            var url = cdn.replace("$BRANCH", name);
            var branch = '<a class="btn btn-primary btn-lg" href="' + url + '" role="button">' + printName + '</a>';
            $('#content').append(branch);
        }
    }
});
