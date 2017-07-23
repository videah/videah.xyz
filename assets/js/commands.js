var commands = {};
var social = {
	github:'https://github.com/videah',
	twitter:'https://twitter.com/videah_',
	keybase:'https://keybase.io/videah',
	steam:'https://steamcommunity.com/id/videah',
	blog:'https://blog.videah.xyz'
}

commands.help = function() {
	var output = "<div>" +
		"<ul>" +
		"<li><strong>help</strong> - display this help.</li>" +
		"<li><strong>echo</strong> - display a line of text.</li>" +
		"<li><strong>intro</strong> - display site welcome screen.</li>" +
		"<li><strong>social</strong> - display social command list.</li>" +
		"<li><strong>cowsay</strong> - speaking cow.</li>" +
		// "<li><strong>clear</strong> - clear the terminal screen.</li>" +
		"</ul></div>";
	return output;
};

commands.intro = function() {
	var output = "" +
		"<div id='intro'>" +
			"<img id='logo' src='assets/images/logo.png'>" +
			"<p>Hello, I am <strong>videah</strong>. </p>" +
			"<p>This is my personal site, feel free to look around.<p>" +
			"<p>Run the command <strong>help</strong> to get a list of commands.</p>" +
		"</div>"
	return output;
};

commands.social = function() {
	var output = "<div>" +
		"Enter one of these commands to redirect to my social media." +
		"<ul>" +
		"<li><strong>github</strong> - my github where i put my projects n stuff.</li>" +
		"<li><strong>twitter</strong> - where i ramble about shit, including politics, so be warned.</li>" +
		"<li><strong>keybase</strong> - if you're a cryptonut and want to send me classified docs or some shit.</li>" +
		"<li><strong>steam</strong> - hey gamers.</li>" +
		"<li><strong>blog</strong> - my dumb blog that i rarely post to.</li>" +
		"</ul>" +
		"Here's some other social stuff." +
		"<ul>" +
		"<li><strong>Email</strong> - videah@selfish.systems</li>" +
		"<li><strong>IRC</strong> - nick is videah, i lurk freenode and OFTC</li>" +
		"<li><strong>Bitcoin</strong> - 1Jqq96HVZ2AKijjxNfYi2SaKaW78keWEMH - give me cyber money</li>" +
		"<li><strong>Signal</strong> - email me for it</li>" +
		"</ul>" +
		"</div>";
	return output;
};

for (var key in social) {

	if (!social.hasOwnProperty(key)) { continue; }

	commands[key] = function(args) {
		window.location.href = social[args[0]];
		return "<p class='hidden'>" +
			"Redirecting to " + args[0] + " ..."
		"</p>"
	}

}

commands.echo = function(args) {
	var output = ""
	for(var i = 1; i < args.length; i++) {
		output += args[i] + "\n";
	}
	return output;
};

commands.cowsay = function(args) {

	var input = args.splice(1)
	input = input.join();
	input = input.replace(/,/g , " ");
	input = input.trim();

	if (!input) {return ""};

	var output = "<p>&nbsp;" +
		"_".repeat(input.length + 2) +
	"&nbsp;</p>" +

	"<p>&lt; " + input + " &gt;</p>" +

	"<p>&nbsp;" +
		"-".repeat(input.length + 2) +
	"<p>&nbsp;</p>" +

	// God fucking help us
	"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;^__^&nbsp;</p>" +
	"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;(oo)\\_______&nbsp;</p>" +
	"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\\/\\&nbsp;</p>" +
	"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;|&nbsp;" +
	"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;"

	return output;

}

// Hacky shit, i hate js
function focusOnClick(i) {
	var allspans = document.getElementsByClassName(i);
	var currentline = allspans[allspans.length - 1];
	currentline.focus();
}

Terminal.init(document.getElementById("terminal"), commands);
