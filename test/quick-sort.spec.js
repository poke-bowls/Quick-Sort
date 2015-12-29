var chai = require( 'chai' );
var mocha = require( 'mocha' );
var expect = chai.expect;
var quickSort = require( './../js/quick-sort.js' );

chai.should();

describe( 'quickSort', function() {
  it( 'should exist', function() {
    expect( quickSort ).to.exist;
    expect( quickSort ).to.be.a( 'function' );
  });

  it( 'should return a number', function() {

  });

});