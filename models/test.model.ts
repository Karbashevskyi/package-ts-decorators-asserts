import {CheckArgumentsOfMethodDecorator, TypeOfErrorEnum} from '../src/decorators/check-arguments-of-method.decorator';

export class TestModel {

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
