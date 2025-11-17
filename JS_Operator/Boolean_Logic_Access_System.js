let isLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;

let isSecure = isAlarmOn && isLocked && isOwnerInside && isWindowClosed;

console.log(isSecure ? "Secure" : "Unsafe");