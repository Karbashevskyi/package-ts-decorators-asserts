import {Model} from '../../mock/models/model';


test('testMethod', () => {
    const testClass = new Model();
    expect(testClass.testMethod('Hello', 1, [])).toBe('Hello');
});

test('Argument of method testMethodTwo is empty!', () => {
    const testClass = new Model();
    expect(() => {
        // @ts-ignore
        testClass.testMethodTwo('Hello', undefined, [])
    }).toThrow('Argument of method testMethodTwo is empty!');
});

test('testMethodThree', () => {
    const testClass = new Model();
    expect(testClass.testMethodThree('Hello', 1, [])).toBe('Hello');
});

test('testMethodFour', () => {
    const testClass = new Model();
    expect(testClass.testMethodFour('Hello', 1, [])).toBe('Hello');
});

test('testMethodFive', () => {
    const testClass = new Model();
    expect(testClass.testMethodFive('Hello', 1, [])).toBe('Hello');
});
