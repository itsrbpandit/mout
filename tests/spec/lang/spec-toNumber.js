define(['mout/lang/toNumber'], function(toNumber){

    describe('lang/toNumber', function(){

        it('should convert null to zero', function(){
            expect( toNumber(null) ).toBe(0);
        });

        it('should convert undefined to zero', function(){
            // this goes against the [ToNumber](http://es5.github.io/#x9.3)
            // but it will avoid potential headaches for end users
            expect( toNumber(void(0)) ).toBe(0);
        });

        it('should return numeric value unchanged', function(){
            expect( toNumber(0) ).toBe( 0 );
            expect( toNumber(123) ).toBe( 123 );
            expect( toNumber(-123) ).toBe( -123 );
            expect( toNumber(0.45) ).toBe( 0.45 );
            expect( toNumber(-0.45) ).toBe( -0.45 );
            expect( toNumber(Infinity) ).toEqual( Infinity );
        });

        it('should typecast boolean into number', function () {
            expect( toNumber(false) ).toEqual( 0 );
            expect( toNumber(true) ).toEqual( 1 );
        });

        it('should typecast numeric string into number', function () {
            expect( toNumber('123') ).toEqual( 123 );
            expect( toNumber('123.45') ).toEqual( 123.45 );
        });

        it('should convert Date to ms integer', function () {
            expect( toNumber(new Date(1985, 6, 23)) ).toBe( 490935600000 );
        });

        it('should handle String constructor', function () {
            expect( toNumber(new String('78')) ).toEqual( 78 );
        });

        it('should handle Number constructor', function () {
            expect( toNumber(new Number(90)) ).toEqual( 90 );
        });

        it('should return NaN if not numeric', function () {
            expect( toNumber('false') ).toBeNaN();
            expect( toNumber('true') ).toBeNaN();
            expect( toNumber({}) ).toBeNaN();
            expect( toNumber(/123/) ).toBeNaN();
            expect( toNumber([]) ).toBeNaN();
            expect( toNumber([1]) ).toBeNaN();
        });

    });

});
