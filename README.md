# loopback-chai
[![Travis](https://img.shields.io/travis/InCuca/loopback-chai/master.svg)](https://travis-ci.org/InCuca/loopback-chai/branches) [![Code Climate](https://img.shields.io/codeclimate/coverage/InCuca/loopback-chai.svg)](https://codeclimate.com/github/InCuca/loopback-chai/test_coverage)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/InCuca/loopback-chai.svg)](https://codeclimate.com/github/InCuca/loopback-chai/maintainability)



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
expect(Model).to.have.relationship('name', 'RelatedModel')
expect(Model).to.have.a.propertyOfType('property', Object)
expect(Model).to.belongsTo('relationship', 'RelatedModel')
expect(Model).to.belongsTo('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.haveOne('relationship', 'RelatedModel')
expect(Model).to.haveOne('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.haveMany('relationship', 'RelatedModel')
expect(Model).to.haveMany('relationship', 'RelatedModel', 'relatedModelId')
expect(Model).to.inherits(BaseModel)
```
