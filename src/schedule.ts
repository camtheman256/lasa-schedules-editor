export interface Schedule {
    name: string,
    combinedAB: boolean,
    applyDay?: number[],
    dates?: string[]
    schedule: Period[],
}

export interface Period {
    name: string,
    startTime: string,
    endTime: string,
    runTime: string
}