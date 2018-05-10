# loopback-chai
[![Travis](https://img.shields.io/travis/InCuca/loopback-chai/master.svg)](https://travis-ci.org/InCuca/loopback-chai/branches)

Repository of [chai](http://www.chaijs.com) assertions for loopback

## External Dependencies

This plugin expects that you have [chai](http://www.chaijs.com) and [loopback](http://loopback.io) packages available to import.

## Usage with Chai


```js
import chai from 'chai';
import loopbackChai from 'loopback-chai';

chai.use(loopbackChai);
```

## Added Assertions

```js
expect(modelInstance).to.be.model
expect(Model).to.haveMany('relationship')
expect(Model).to.haveMany('relationship', 'RelatedModel')
expect(Model).to.haveMany('relationship', 'RelatedModel', 'relatedModelId')
expect(modelInstance).to.be.model
expect(Model).to.haveMany('relationship')
expect(Model).to.haveMany('relationship', 'RelatedModel')
expect(Model).to.have.propertyOfType('foo', 'Object')
```
