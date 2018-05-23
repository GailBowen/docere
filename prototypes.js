function User() {};
User.prototype.isAdmin = function() {return false;};

function Admin() {};
Admin.prototype = User;
Admin.prototype.isAdmin = function() {return true;};

var Bob = new Admin();
alert(Bob.isAdmin());