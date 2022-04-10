import {ArgumentsIsNotNullOrUndefined, TypeOfErrorEnum} from "../../lib";

export class Model {

    private readonly sayHello: string = 'Hello';

    constructor() {
    }

    /**
     *
     * @param sayWorld
     */
    @ArgumentsIsNotNullOrUndefined()
    testSayHello(sayWorld: string) {
        return `${this.sayHello} ${sayWorld}`;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     */
    @ArgumentsIsNotNullOrUndefined()
    testMethod(argumentOne: string, argumentTwo: number, argumentThree: []) {
        return argumentOne;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     */
    @ArgumentsIsNotNullOrUndefined({
        count: 2
    })
    testMethodTwo(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     */
    @ArgumentsIsNotNullOrUndefined({
        count: 1
    })
    testMethodThree(argumentOne: string, argumentTwo?: number, argumentThree?: []) {
        return argumentOne;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     */
    @ArgumentsIsNotNullOrUndefined({
        count: 1,
        typeOfError: TypeOfErrorEnum.IGNORE
    })
    testMethodFour(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     */
    @ArgumentsIsNotNullOrUndefined({
        count: 2,
        typeOfError: TypeOfErrorEnum.CONSOLE
    })
    testMethodFive(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    /**
     *
     * @param argumentOne
     * @param argumentTwo
     * @param argumentThree
     * @param argumentFour
     * @param argumentFive
     */
    @ArgumentsIsNotNullOrUndefined({
        itemCheckedList: [null, undefined, 'null', 'undefined', 'test']
    })
    testMethodSix(
        argumentOne: string,
        argumentTwo: number,
        argumentThree: any,
        argumentFour: boolean,
        argumentFive: Symbol
    ) {
        return argumentOne;
    }

}
