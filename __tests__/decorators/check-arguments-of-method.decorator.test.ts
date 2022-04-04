import {Model} from '../../mock/models/model';

describe('Testing of decorator check-arguments', () => {

    let testClass: Model;

    beforeAll(() => {
        testClass = new Model();
    })

    test('testMethod', () => {
        expect(testClass.testMethod('Hello', 1, [])).toBe('Hello');
    });

    test('Argument of method testMethodTwo is empty!', () => {
        expect(() => {
            // @ts-ignore
            testClass.testMethodTwo('Hello', undefined, [])
        }).toThrow('Argument of method testMethodTwo is empty!');
    });

    test('testMethodThree', () => {
        expect(testClass.testMethodThree('Hello', 1, [])).toBe('Hello');
    });

    test('testMethodFour', () => {
        expect(testClass.testMethodFour('Hello', 1, [])).toBe('Hello');
    });

    test('testMethodFive', () => {
        expect(testClass.testMethodFive('Hello', 1, [])).toBe('Hello');
    });

});
