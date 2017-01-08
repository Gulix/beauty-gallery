define([
'json/load-photos-Eric-mairie', 
'json/load-photos-Eric-nous2'], 
 function(
tpl1, tpl2) 
 { return { load: function() {
var list = [ ];
list = list.concat(tpl1.photos());
list = list.concat(tpl2.photos());
return list;

} }; });