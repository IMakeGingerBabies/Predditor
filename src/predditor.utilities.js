var http = require("http");
var https = require("https");

Predditor.Utilities = {
  Request: function(is_secure, method, path, data){
    this._is_secure = is_secure;
    this._method = method;
    this._path = path;
    this._data = data;
    
    // Setup some default options
    this._options = {
      host: Predditor.Settings.default_host,
      method: this._method,
      path: this._path,
      headers: {
        "user-agent": Predditor.Settings.default_user_agent
      }
    };
    
    // Use HTTPS if is_secure is true
    if (this._is_secure) {
      this._request = https.request;
      this._options.port = 443;
    } else {
      this._request = http.request;
      this._options.port = 80;
    }
  }
};

Predditor.Utilities.Request.prototype.send = function(){
  
};