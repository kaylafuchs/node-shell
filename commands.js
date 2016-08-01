var fs = require('fs');
var request = require('request');

function prompt(file,first = false){
	var text = 'prompt > '
	if (first){
		process.stdout.write(text);
	} else {
		process.stdout.write("\n" + text);
	}
}

 // function commandsLeft(array){
 // 	array = array.shift();
 // 	return array;
 // }


function done(text,file){
	process.stdout.write(text);
	prompt();
}

function pwd(callback,file){
	callback(process.env.PWD)
}

function date(callback,file){
	callback(new Date().toString());
}

function invalidCommand(callback,file){
	callback("Invalid command.");
}

function ls(callback,file){
	var output = ""
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    output += file.toString() + "\n";
	  })
	  callback(output);
	});
}

function echo(callback,args){
	callback(args.join(" "));
}

function cat(callback,file){
	fs.readFile(file,function(err,data){
		if (err) throw err;
		callback(data);
	})
}

function head(callback,file,stdin){
	if (stdin){
		file = stdin;
	}

	fs.readFile(file,function(err,data){
		if (err) throw err;
		var array = data.toString().split("\n");
		var firstTen = array.slice(0,11).join("\n");
		callback(firstTen);
	})
}

function tail(callback,file,stdin){
	if (stdin){
		file = stdin;
	}
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var array = data.toString().split("\n");
		var lastTen = array.slice(array.length - 10).join("\n");
		callback(lastTen)
	})
}

function wc(callback,file,stdin){
	if (stdin){
		file = stdin;
	}
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var array = data.toString().split("\n");
		callback(array.length.toString())
	})
}

function sort(callback,file,stdin){
	if (stdin){
		file = stdin;
	}
	fs.readFile(file,function(err,data){
		if (err) throw err;
		var array = data.toString().split("\n");
		callback(array.sort().join("\n"))
	})
}

function curl(callback,url){
	request(url,function(err,response,body){
		if (err) throw err;
		if (!err && response.statusCode == 200){
			callback(body);
		}
	})
}


module.exports = {
	prompt: prompt,
	pwd: pwd,
	date: date,
	invalidCommand: invalidCommand,
	ls: ls,
	echo: echo,
	cat: cat,
	head: head,
	tail: tail,
	wc: wc,
	sort: sortFile,
	curl: curl,
	done: done,
	commandsLeft: commandsLeft
}