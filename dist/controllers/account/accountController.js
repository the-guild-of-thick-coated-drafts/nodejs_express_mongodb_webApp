"use strict";var path=require("path");exports.displayLoginPage=function(n,t){t.render(path.join(__dirname,"../../views/accounts/login"),{})},exports.login=function(n,t){var i=n.body.name,o=n.body.password;t.set({"Content-Type":"text/html; charset=UTF-8"}),"admin"===i&&"123"===o?(n.session.username=i,t.end('<script>window.location="/admin/videoInfo"</script>')):t.end('<script>alert("用户名或者密码错误");window.location="/account/login"</script>')};