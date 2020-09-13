export interface SchoolYear {
    // the string arrays inside holidays correspond to date ranges, which is why this type union is necessary
    holidays: (string|string[])[],
    not_before: string,
    not_after: string
}