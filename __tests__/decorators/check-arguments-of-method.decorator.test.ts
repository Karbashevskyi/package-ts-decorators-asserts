import {Model} from '../../mock/models/model';

describe('Testing of decorator check-arguments', () => {

    let testClass: Model;

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    beforeAll(() => {
        testClass = new Model();
    });

    it('testSayHello', () => {
        expect(testClass.testSayHello('World')).toBe('Hello World');
    });

    it('testMethod', () => {
        expect(testClass.testMethod('Hello', 1, [])).toBe('Hello');
    });

    it('Argument of method testMethodTwo is empty!', () => {
        expect(() => {
            // @ts-ignore
            testClass.testMethodTwo('Hello', undefined, [])
        }).toThrow('Argument of method testMethodTwo is empty!');
    });

    it('testMethodThree', () => {
        expect(testClass.testMethodThree('Hello', 1, [])).toBe('Hello');
    });

    it('testMethodFour', () => {
        expect(testClass.testMethodFour('Hello', 1, [])).toBe('Hello');
    });

    it('testMethodFive', () => {
        expect(testClass.testMethodFive('Hello', 1, [])).toBe('Hello');
    });

    it.each(arrWithDataToTest)('testMethodSix | %p', (itemFromTheList: any) => {

        expect(() => {
            testClass.testMethodSix(
                itemFromTheList,
                itemFromTheList,
                itemFromTheList,
                itemFromTheList,
                itemFromTheList
            )
        }).toThrow('Argument of method testMethodSix is empty!');

    });

});
