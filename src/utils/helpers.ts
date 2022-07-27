import { GetServerSideProps, GetServerSidePropsContext } from "next";


export const validateCookies = (context: GetServerSidePropsContext) => {
    //The session id is obtained from the cookie of the request object
    const sessionID = context.req.cookies["connect.sid"];
    //Return an object with cookie if true else returns false
    return sessionID ? ({ Cookie: `connect.sid=${sessionID}` }) : false;
}

export const getFirstLetters = (word: string) => {
    //Splits the word on space
    let splitWords = word.split(" ");
    if (splitWords.length > 2) {
        //If the word is big , Consider only first two spaces
        splitWords = splitWords.splice(0, 2);
    }
    //Filters the word for first letter
    const firstLetters = splitWords.map((word) => {
        return word[0];
    })
    //Returns an array with first letters of the word
    return firstLetters;
}

export const isValueNullShowPlaceholder = (value: string | null | boolean | undefined) => {
    //Returns a placeholder text if value is falsy
    if (!value) {
        return "No Information Yet"
    } else {
        return value;
    }
}

export const isArrayNullShowPlaceholder = (value: string[] | []) => {
    //Returns a placeholder text if value is falsy
    if (value.length === 0) {
        return "No Information Yet"
    } else {
        return value;
    }
}