// Predditor Account Class
// Used for logging in, etc
Predditor.Account = function(){
  
  // API Defined Private Variables:
  this._comment_karma = null;
  this._created = null;
  this._created_utc = null;
  this._has_mail = null;
  this._has_mod_mail = null;
  this._has_verified_email = null;
  this._id = null;
  this._is_friend = null;
  this._is_gold = null;
  this._is_mod = null;
  this._link_karma = null;
  this._modhash = null;
  this._name = null;
  this._over_18 = null;
  
  // Library Defined Private Variables:
  this._logged_in = false;
  this._login_utc = null;
  this._last_reload_utc = null;
};

// API Defined Public Getters
Predditor.Account.prototype.get_comment_karma = function(){
  return (this._comment_karma);
};

Predditor.Account.prototype.get_created = function(){
  return (this._created);
};

Predditor.Account.prototype.get_created_utc = function(){
  return (this._created_utc);
};

Predditor.Account.prototype.has_mail = function(){
  return (this._has_mail);
};

Predditor.Account.prototype.has_mod_mail = function(){
  return (this._has_mod_mail);
};

Predditor.Account.prototype.has_verified_email = function(){
  return (this._has_verified_email);
};

Predditor.Account.prototype.get_id = function(){
  return (this._id);
};

Predditor.Account.prototype.is_friend = function(){
  return (this._is_friend);
};

Predditor.Account.prototype.is_gold = function(){
  return (this._is_gold);
};

Predditor.Account.prototype.is_mod = function(){
  return (this._is_mod);
};

Predditor.Account.prototype.get_link_karma = function(){
  return (this._link_karma);
};

Predditor.Account.prototype.get_modhash = function(){
  return (this._modhash);
};

Predditor.Account.prototype.get_name = function(){
  return (this._name);
};

Predditor.Account.prototype.is_over_18 = function(){
  return (this._over_18);
};

// API Defined Public Functions:
Predditor.Account.prototype.clear_sessions = function(){
  
};

Predditor.Account.prototype.delete_user = function(){
  
};

Predditor.Account.prototype.login = function(){
  
};

Predditor.Account.prototype.register = function(){
  
};

Predditor.Account.prototype.update = function(){
  
};

// Library Defined Public Functions:
Predditor.Account.prototype.reload = function(){
  
};