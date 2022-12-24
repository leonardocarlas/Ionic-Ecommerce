/* eslint-disable prefer-arrow/prefer-arrow-functions */


export function toNumberIds(stringIds: any[]): number[] {
    const ids: number[] = stringIds.map(id => +id);
    return ids;
}
