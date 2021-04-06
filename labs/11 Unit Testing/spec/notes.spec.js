describe('notes module', function () {
    beforeEach(function () {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    
    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });

    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function () {
        expect(notes.add('   ')).toBe(false);
    });

    it('should require a string parameter', function () {
        expect(notes.add()).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it('should be able to delete first index', function(){
        expect(notes.remove(0)).toBe(true);
        expect(notes.count()).toBe(4);
    });

    it('should be able to delete last index', function(){
        expect(notes.remove(notes.count()-1)).toBe(true);
        expect(notes.count()).toBe(4);
    });
    it('should return false if index is out of range', function(){
        expect(notes.remove(10)).toBe(false);
    });

    it('should return false if the parameter is missing', function(){
        expect(notes.remove()).toBe(false);
    });

    it('should return index of "note"', function(){
        expect(notes.add('note')).toBe(true);
        expect(notes.find('note')).toBe(5);
    });

    it('should return false if searching for blank string', function(){
        expect(notes.find(' ')).toBe(false);
    });
});