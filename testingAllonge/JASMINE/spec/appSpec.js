describe("test", function () {



    it("tests arrays boolean", function () {

        expect([1, 2, 3] === [1, 2, 3]).toEqual(false);

    });

    it("tests another arrays comparison", function () {
        var array1 = [1, 2];
        var array2 = [1, 2];
        expect(array1 === array2).toEqual(false);
        expect(array1 === array2).toBe(false);
        expect(array1).toEqual(array2);
        // expect(array1).toBe(array2); <- ojo, esto no se cumple
    });

    it('tests object boolean', function () {
        expect({ x: 1, y: 2, z: 3 } === { x: 1, y: 2, z: 3 }).toEqual(false);
    });


});