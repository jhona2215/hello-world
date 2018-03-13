function User(){
	this.name;
	this.userName;
	this.password;
	this.access;
	this.cash=0;
}

User.prototype.setName = function(name) {
  this.name=name;
};
User.prototype.getName = function() {
  return this.name;
};

User.prototype.setPassword = function(pass) {
  this.password=pass;
};
User.prototype.getPassword = function() {
  return this.password;
};

User.prototype.setUserName = function(user) {
  this.userName=user;
};
User.prototype.getUserName = function() {
  return this.userName;
};

User.prototype.setCash = function(coin) {
  this.cash=coin;
};
User.prototype.getCash = function() {
  return this.cash;
};

User.prototype.validate= function(nick, pass){
	if(nick==this.userName && pass==this.password){
		this.access=true;
	} else {
		this.access=false;
	}
};