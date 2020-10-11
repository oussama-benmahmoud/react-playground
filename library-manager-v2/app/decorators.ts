export function sealed(name: string) {
    return function (target: Function): void {
        console.log(`sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction  {
    let newConstructor: Function = function () {
        console.log(`creating new instance.`);
        console.log(target);
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    return <TFunction>newConstructor;
}

export function readonly(target: Object,
                         propertyKey: string,
                         descriptor: PropertyDescriptor) {
    console.log(`setting ${propertyKey} to be readonly.`);
    descriptor.writable = false;
}

export function writable(isWritable: boolean) {
    return  function (target: Object,
                             propertyKey: string,
                             descriptor: PropertyDescriptor) {
        console.log(`setting ${propertyKey}`);
        descriptor.writable = isWritable;
    }
}