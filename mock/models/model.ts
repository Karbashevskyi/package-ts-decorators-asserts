import {ArgumentsIsNotNullOrUndefined, TypeOfErrorEnum} from "../../lib";


export class Model {

    @ArgumentsIsNotNullOrUndefined()
    testMethod(argumentOne: string, argumentTwo: number, argumentThree: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2
    })
    testMethodTwo(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1
    })
    testMethodThree(argumentOne: string, argumentTwo?: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1,
        typeOfError: TypeOfErrorEnum.IGNORE
    })
    testMethodFour(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2,
        typeOfError: TypeOfErrorEnum.CONSOLE
    })
    testMethodFive(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

}
