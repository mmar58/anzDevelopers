function gcd(a: number, b: number) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export function lcm(a: number, b: number) {
    // LCM of 0 and any number is 0
    if (a === 0 || b === 0) {
        return 0;
    }
    return Math.abs(a * b) / gcd(a, b);
}