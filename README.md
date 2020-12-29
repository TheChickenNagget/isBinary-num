# isbinary-num 
### Simple module to test if number is binary number 
[![install size](https://packagephobia.now.sh/badge?p=isbinary-num)](https://packagephobia.now.sh/result?p=isbinary-num)

## Usage
```js
const test = require("isbinary-num")
test("00000010101011001011110f0010110100");
// outputs: true

test("2155665639569985463546587444444445");
//outputs: false
```

## Terminal Usage
> Requires to have package installed with `--global` tag!

> Terminal prefix is `isbin`, For detailed example:
```shell
$ isbin 0100100001101001
$ true
```
```shell
$ isbin 564684136548blah77741
$ false
```
