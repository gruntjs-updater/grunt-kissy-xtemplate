'use strict';

var grunt = require('grunt'),
    os = require('os');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.kmc = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    tearDown: function(done){
        grunt.file.delete('tmp/');
        done();
    },
    index: function (test) {
        test.expect(2);

        var actual = grunt.file.read('tmp/xtpl/a-xtpl.js', 'utf-8');
        var expected = grunt.util.normalizelf(grunt.file.read('test/expected/a-xtpl.js', 'utf-8'));
        test.equal(actual, expected, 'should build proper compiled a-xtpl file.');

        var actualDep = grunt.file.read('tmp/xtpl/b-xtpl.js', 'utf-8');
        var expectedDep = grunt.util.normalizelf(grunt.file.read('test/expected/b-xtpl.js', 'utf-8'));
        test.equal(actualDep, expectedDep, 'should have proper compiled b-xtpl file.');

        test.done();
    }
};
