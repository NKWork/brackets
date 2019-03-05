
  function getStringOfRules(bracketsConfig){
    let rules=[];
    bracketsConfig.forEach(function(item,i){
      rules[i] = item.join('');
    });
    return rules;
  }
  function removing(rules, str) {
    rules.forEach(function(item,i){
      str = str.replace(rules[i], '');
    }); 
    return str;
  }
  module.exports = function check(str, bracketsConfig) {
    let rules = getStringOfRules(bracketsConfig);
    let copyOfStr = str;
    let counter = str.length;
    while(counter!=0){
      counter--;
      copyOfStr = removing(rules, copyOfStr);  
    }  
    if (copyOfStr === '') {
      return true;
    } else {
      return false;
    }
  }