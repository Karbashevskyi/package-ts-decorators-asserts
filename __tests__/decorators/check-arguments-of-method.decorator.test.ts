import {TestModel} from '../../models/test.model';


test('testMethod', () => {
    const testClass = new TestModel();
    expect(testClass.testMethod('Hello', 1, [])).toBe('Hello');
});

test('Argument of method testMethodTwo is empty!', () => {
    const testClass = new TestModel();
    expect(() => {
        // @ts-ignore
        testClass.testMethodTwo('Hello', undefined, [])
    }).toThrow('Argument of method testMethodTwo is empty!');
});

test('testMethodThree', () => {
    const testClass = new TestModel();
    expect(testClass.testMethodThree('Hello', 1, [])).toBe('Hello');
});

test('testMethodFour', () => {
    const testClass = new TestModel();
    expect(testClass.testMethodFour('Hello', 1, [])).toBe('Hello');
});

test('testMethodFive', () => {
    const testClass = new TestModel();
    expect(testClass.testMethodFive('Hello', 1, [])).toBe('Hello');
});
