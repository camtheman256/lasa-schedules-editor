function calculateRunTime(a: string, b: string): number {
    const aSplit = a.split(":"), bSplit = b.split(":");
    if(aSplit.length === 2 && bSplit.length === 2) {
        return (parseInt(aSplit[0]) - parseInt(bSplit[0])) * 60 + (parseInt(aSplit[1]) - parseInt(bSplit[1]));
    }
    return 0;
}

export {
    calculateRunTime
};