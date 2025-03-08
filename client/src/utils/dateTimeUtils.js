export const fromISODate = (ISODate) => {
    const date = new Date(ISODate);

    const formattedDate = date.toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    return formattedDate;
}