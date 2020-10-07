namespace Utility {
    export namespace Fees {
        export function CalcuLateFee(daysLate: number): number {
            return daysLate * .25;
        }
    }

    export function MaxBookAllowed(age: number): number {
        if(age<12) {
            return 3;
        } else {
            return 10;
        }
    }

    export function privateFunc(): void {
        console.log('this is private...');
    }
}