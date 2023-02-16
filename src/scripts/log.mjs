const MODULE = "Prosemirror Extensions";

export class Log {
    static debug(...args) {
        console.debug(`${MODULE} |`, ...args);
    }

    static error(...args) {
        console.error(`${MODULE} |`, ...args);
    }

    static info(...args) {
        console.log(`${MODULE} |`, ...args);
    }

    static warn(...args) {
        console.warn(`${MODULE} |`, ...args);
    }
}