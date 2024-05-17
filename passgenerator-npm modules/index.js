import genearator from 'generate-password';

var password = genearator.generate({
	length: 100,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);