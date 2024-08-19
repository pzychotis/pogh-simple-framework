export function validateOrElse(predicate: any, elseCB?: () => void): void;
export class PoghError extends Error {
    constructor(options?: {
        errorNumber: number;
        message: string;
    });
    get errorNumber(): number;
    #private;
}
//# sourceMappingURL=errors.d.mts.map