namespace App {
    export function autoBind(_: any, _1: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const newDescriptor: PropertyDescriptor = {
          configurable: true,
          get() {
            return originalMethod.bind(this);
          },
        };
        return newDescriptor;
      }
}