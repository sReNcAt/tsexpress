declare module "tsqlstring" {
	export function _escapeString(val: any): string;
	export function _zeroPad(number: number | string, length: number): string;
	export function _convertTimezone(tz: string): number;
	export function escapeId(value: any, forbidQualified?: boolean): string;
	export function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
	export function format(sql: string, args?: object | any[], stringifyObjects?: boolean, timeZone?: string): string;
	export function raw(sql: string): { toSqlString: () => string };
	export function arrayToList(array: Array<string>, timeZone: string): string;
	export function dateToString(date: string | number | Date, timeZone: string): string;
	export function bufferToString(buffer: Buffer): string;
	export function objectToValues(object: object, timeZone: string): string;
}
