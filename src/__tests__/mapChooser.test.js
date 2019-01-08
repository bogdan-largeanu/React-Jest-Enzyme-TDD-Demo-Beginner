import mapChooser from '../mapChooser.js'

describe("mapChooser", function(){
    it("returns an image based on input given to it", function(){
        let expected = "portland.png";
        let actual  = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
    it("returns an default image when no input is given", function(){
        let expected = "default.png";
        let actual  = mapChooser("");
        expect(actual).toEqual(expected);
    });
    
});