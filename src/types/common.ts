import { sql } from '../model/model';

declare global {
    interface String {
        format(...replacements: string[]): string;
    }
    function delay(ms: number): Promise<void>;
    interface ResultData {
        result: sql.IRecordSet<any> | undefined;
    }
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

if (!global.delay) {
    // async setTimeout
    global.delay = async function delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export = () => { };
