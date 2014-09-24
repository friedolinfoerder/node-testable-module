'use strict';

var mod = require('../src/index');

describe('module MODULENAME', function() {

    describe('function add', function() {

        it('should have function add', function() {
            expect(mod.add).toBeDefined();
        });

        it('should add two numbers', function() {
            expect(mod.add(1,2)).toBe(3);
        });

    });
});