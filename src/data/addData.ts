/**
 * Create time: 2024 07 24  13:12:50
 * File name: addData.ts
 * Path: src/data
 * About:
 */
import { IClasses, ICommonThings } from '../types/types.ts'

export function addData(
    isClass: boolean,
    classRequireInformationArr?: IClasses[],
    commonThingsArr?: ICommonThings[]
) {
    if (isClass) {
        if (classRequireInformationArr == undefined) {
            return []
        } else {
            return classRequireInformationArr
        }
    } else {
        if (commonThingsArr == undefined) {
            return []
        } else {
            return commonThingsArr
        }
    }
}
