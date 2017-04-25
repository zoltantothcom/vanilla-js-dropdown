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
            expect( $('button.js-Dropdown-title') ).toBeDefined();
        });

        it('should have the list', function() {
            expect( $('ul.js-Dropdown-list') ).toBeDefined();
        });

        it('should have the same number of options as the original', function() {
            var count = $('#select option').length;
            expect( $('ul.js-Dropdown-list li').length ).toBe(count);
        });
    });

    describe('methods', function() {
        it('.open() should open the select', function() {
            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
            this.select.open();
            expect( $('.js-Dropdown-list') ).toHaveClass('is-open');
        });

        it('.close() should close the select', function() {
            this.select.open();
            expect( $('.js-Dropdown-list') ).toHaveClass('is-open');
            this.select.close();
            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
        });

        it('.toggle() should toggle the select', function() {
            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
            this.select.toggle();
            expect( $('.js-Dropdown-list') ).toHaveClass('is-open');
            this.select.toggle();
            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
        });
    });

    describe('behavior', function() {
        it('should open on main button click', function() {
            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');

            var spyEvent = spyOnEvent('.js-Dropdown-title', 'click');
            $('.js-Dropdown-title').click();

            expect('click').toHaveBeenTriggeredOn('.js-Dropdown-title');
            expect(spyEvent).toHaveBeenTriggered();

            expect( $('.js-Dropdown-list') ).toHaveClass('is-open');
        });

        it('should close on any click outside the select', function() {
            this.select.open();
            expect( $('.js-Dropdown-list') ).toHaveClass('is-open');

            var spyEvent = spyOnEvent('body', 'click');
            $('body').click();

            expect('click').toHaveBeenTriggeredOn('body');
            expect(spyEvent).toHaveBeenTriggered();

            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
        });

        it('should highlight only the clicked item', function() {
            this.select.open();

            var spyEvent = spyOnEvent('.js-Dropdown-list li:eq(3)', 'click');
            $('.js-Dropdown-list li:eq(3)').click();

            expect('click').toHaveBeenTriggeredOn('.js-Dropdown-list li:eq(3)');
            expect(spyEvent).toHaveBeenTriggered();

            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
            expect( $('.js-Dropdown-list li:eq(0)') ).not.toHaveClass('is-selected');
            expect( $('.js-Dropdown-list li:eq(1)') ).not.toHaveClass('is-selected');
            expect( $('.js-Dropdown-list li:eq(2)') ).not.toHaveClass('is-selected');
            expect( $('.js-Dropdown-list li:eq(3)') ).toHaveClass('is-selected');
            expect( $('.js-Dropdown-list li:eq(4)') ).not.toHaveClass('is-selected');
        });

        it('should set the selected on original', function() {
            this.select.open();

            var spyEvent = spyOnEvent('.js-Dropdown-list li:eq(4)', 'click');
            $('.js-Dropdown-list li:eq(4)').click();

            expect('click').toHaveBeenTriggeredOn('.js-Dropdown-list li:eq(4)');
            expect(spyEvent).toHaveBeenTriggered();

            expect( $('.js-Dropdown-list') ).not.toHaveClass('is-open');
            expect( $('.js-Dropdown-list li:eq(4)') ).toHaveClass('is-selected');

            expect( $('#select option:eq(0)').prop('selected') ).not.toBeTruthy();
            expect( $('#select option:eq(4)').prop('selected') ).toBeTruthy();
        });
    });
});