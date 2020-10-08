export function CalcuLateFee(daysLate: number): number {
    return daysLate * .25;
}

export function MaxBookAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}

function privateFunc(): void {
    console.log('this is private...');
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}
