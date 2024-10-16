//your JS code here. If required.
const output = document.getElementById('output');
const button = document.getElementById('btn');

function transformData() {
	const input = document.getElementById('ip').value;
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(input);
			output.textContent = `Result: ${input}`;
		}, 2000)
	});

	promise.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Result: ${message}`;
				resolve(message);
			}, 2000)
		});
	})
	.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Result: ${message*2}`;
				resolve(message*2);
			}, 1000)
		});
	})
	.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Result: ${message-3}`;
				resolve(message-3);
			}, 1000)
		});
	})
	.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Result: ${message/2}`;
				resolve(message/2);
			}, 1000)
		});
	})
	.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Result: ${message+10}`;
				resolve(message+10);
			}, 1000)
		});
		
	})
	.then((message) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				output.textContent = `Final Result: ${message}`;
				resolve(message);
			}, 1000)
		});
	})
	.catch((err) => {
      output.textContent = `Error: ${err}`;
    });
}

button.addEventListener('click', transformData);