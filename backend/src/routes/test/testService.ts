function gcd(a: bigint, b: bigint): bigint {
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;
    while (b !== 0n) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export function lcm(a: bigint, b: bigint): bigint {
    // LCM of 0 and any number is 0
    if (a === 0n || b === 0n) {
        return 0n;
    }
    const absA = a < 0n ? -a : a;
    const absB = b < 0n ? -b : b;
    return (absA * absB) / gcd(a, b);
}