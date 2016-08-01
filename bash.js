
var commands = require('./commands.js');
var cmdList = null
//initial prompt
commands.prompt(true);

//fires after a user types something in 
process.stdin.on('data',function(data){
	var cmd = data.toString().trim();
	var args = null;

// this is a work in progress...
	if (/\|/.test(cmd)){
		cmdList = cmd.split(" | ");
		console.log(cmdList);
		for (var i = 0; i < cmdList.length; i++){
			var output = commands[cmdList[i]](commands.done)
			
		}

	} else {
		runCmd(cmd);
	}

	commands[cmd](commands.done)


	// function runCmd(cmd){
	// 	if (/\s+/g.test(cmd)){
	// 		args = cmd.split(" ").slice(1);
	// 		cmd = cmd.split(" ")[0]; 
	// 	}

	// 	switch (cmd){
	// 		case "pwd":
	// 			commands.pwd(commands.done)
	// 			break;

	// 		case "date":
	// 			commands.date(commands.done);
	// 			break;

	// 		case "ls":
	// 			commands.ls(commands.done);
	// 			break;

	// 		case "echo":
	// 			commands.echo(args,commands.done);
	// 			break;

	// 		case "cat":
	// 			commands.cat(args[0],commands.done);
	// 			break;

	// 		case "head":
	// 			commands.head(args[0],commands.done);
	// 			break;

	// 		case "tail":
	// 			commands.tail(args[0],commands.done);
	// 			break;

	// 		case "wc":
	// 			commands.wc(args[0],commands.done);
	// 			break;

	// 		case "sort":
	// 			commands.sortFile(args[0],commands.done);
	// 			break;

	// 		case "curl":
	// 			commands.curl(args[0],commands.done);
	// 			break;

	// 		default: 
	// 			commands.invalidCommand(commands.done);
				
	// 	}

	// }


})

