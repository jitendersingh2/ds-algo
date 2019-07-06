function autoComplete(list, query) {
    return list.filter(str => str.customStartsWith(query));    
}


String.prototype.customStartsWith = function(search, pos) {
   pos = !pos || pos < 0 ? 0 : +pos;
   return this.substring(pos, pos + search.length) === search; 
}

autoComplete(['dog', 'deer', 'deal'], 'de');