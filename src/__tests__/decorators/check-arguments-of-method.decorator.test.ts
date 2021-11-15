import {CheckArgumentsOfMethodDecorator, TypeOfErrorEnum} from '../../decorators/check-arguments-of-method.decorator';

class Test {

    @CheckArgumentsOfMethodDecorator()
    testMethod(argumentOne: string, argumentTwo: number, argumentThree: []) {
        return argumentOne;
    }

    @CheckArgumentsOfMethodDecorator({
        count: 2
    })
    testMethodTwo(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @CheckArgumentsOfMethodDecorator({
        count: 1
    })
    testMethodThree(argumentOne: string, argumentTwo?: number, argumentThree?: []) {
        return argumentOne;
    }

    @CheckArgumentsOfMethodDecorator({
        count: 1,
        typeOfError: TypeOfErrorEnum.IGNORE
    })
    testMethodFour(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @CheckArgumentsOfMethodDecorator({
        count: 2,
        typeOfError: TypeOfErrorEnum.CONSOLE
    })
    testMethodFive(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

}

test('testMethod', () => {
    const testClass = new Test();
    expect(testClass.testMethod('Hello', 1, [])).toBe('Hello');
});

test('Argument of method testMethodTwo is empty!', () => {
    const testClass = new Test();
    expect(() => {
        // @ts-ignore
        testClass.testMethodTwo('Hello', undefined, [])
    }).toThrow('Argument of method testMethodTwo is empty!');
});

test('testMethodThree', () => {
    const testClass = new Test();
    expect(testClass.testMethodThree('Hello', 1, [])).toBe('Hello');
});

test('testMethodFour', () => {
    const testClass = new Test();
    expect(testClass.testMethodFour('Hello', 1, [])).toBe('Hello');
});

test('testMethodFive', () => {
    const testClass = new Test();
    expect(testClass.testMethodFive('Hello', 1, [])).toBe('Hello');
});
