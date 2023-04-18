//SJSU CMPE 138 Spring 2022 TEAM2
export const formattedDate =(date) => {
    date = new Date(date);
    let formatted_date =  date.getFullYear()+ "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return formatted_date;
}

export const formmattedTime =(date) => {
    date = new Date(date);
    return date.toLocaleTimeString();  
}