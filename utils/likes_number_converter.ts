export function formatNumber(number: number): string {
    const abbreviations = ['k', 'm', 'b', 't'];


    if (Math.abs(number) >= 1000) {

        const abbreviationIndex = Math.floor(Math.log10(Math.abs(number)) / 3) - 1;
        const abbreviatedNumber = number / Math.pow(1000, abbreviationIndex + 1);
        return abbreviatedNumber.toFixed(0) + abbreviations[abbreviationIndex];
    }

    return String(number);
}

