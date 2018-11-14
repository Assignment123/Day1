exports.funcpost = function (request, response) {
    response.json({ value ="3"});
 }; 
 
 exports.funcget = function (request, response) {
    response.json({ name ="sudrishya"}); 
    response.send("Hello!");
 };