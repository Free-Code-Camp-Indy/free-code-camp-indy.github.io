function build(l){l.forEach(function(l){$(".gallery-folders").append(new Folder(l).build())})}build(folderInfo);
