describe('SELECT', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = fixturePath;
        loadFixtures(selectFixture);

        this.select = new CustomSelect({
            elem: 'select'
        });
    });

    describe('original select', function() {
        it('markup should be present', function() {
            expect( $('#select') ).toBeDefined();
        });

        it('should have more than 0 options', function() {
            expect( $('#select option').length ).toBeGreaterThan(0);
        });
    });


    describe('generated select', function() {
        it('should be defined', function() {
            expect( this.select ).toBeDefined();
        });

        it('should have the container', function() {
            expect( $('#custom-select') ).toBeDefined();
        });

        it('should have the main button', function() {
            expect( $('button') ).toBeDefined();
        });
    });

    describe('methods', function() {
        it('.open() should open the select', function() {
            expect( $('#custom-select') ).not.toHaveClass('b-select_open');
            this.select.open();
            expect( $('#custom-select') ).toHaveClass('b-select_open');
        });

        it('.close() should close the select', function() {
            this.select.open();
            expect( $('#custom-select') ).toHaveClass('b-select_open');
            this.select.close();
            expect( $('#custom-select') ).not.toHaveClass('b-select_open');
        });

        it('.toggle() should toggle the select', function() {
            expect( $('#custom-select') ).not.toHaveClass('b-select_open');
            this.select.toggle();
            expect( $('#custom-select') ).toHaveClass('b-select_open');
            this.select.toggle();
            expect( $('#custom-select') ).not.toHaveClass('b-select_open');
        });
    });
});