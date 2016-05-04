describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return Error', function () {
            expect(answer.calculateArea(5, 2, 4, 'Success', 'Error')).toEqual({area : -3, message : 'Error'});
        });
        it('should return Error', function () {
            expect(answer.calculateArea(2, 2, 2, 'Success', 'Success')).toEqual({area : -2, message : 'Success'});
        });
        it('should return Error', function () {
            expect(answer.calculateArea('a', 'b', 'c', 1, 5)).toEqual(false);
        });
        it('should return Error', function () {
            expect(answer.calculateArea('a', 5, 'c', 1, 'Error')).toEqual(false);
        });

    });
});
