# loopback-chai
[![Travis](https://img.shields.io/travis/InCuca/loopback-chai/master.svg)](https://travis-ci.org/InCuca/loopback-chai/branches)

Repository of [chai](http://www.chaijs.com) assertions for loopback

## Usage with Chai


```js
import chai from 'chai';
import loopbackChai from 'loopback-chai';

chai.use(loopbackChai);
```

## Added Assertions

```js
expect(modelInstance).to.be.model
```
