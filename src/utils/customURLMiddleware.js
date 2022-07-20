const PATTERNS = [
    [
        new URLPattern({ pathname: '/:locale/:slug/:search' }),
        ({ pathname }) => pathname.groups,
    ],
]

//The pattern above is the result of the function below
//This below functions works like a polyfill for req.param method

export const params = (url) => {
    const input = url.split('?')[0];
    let result = { locale: '', slug: '', search: '' };

    for (const [pattern, handler] of PATTERNS) {
        const patternResult = pattern.exec(input)
        if (patternResult !== null && 'pathname' in patternResult) {
            result = handler(patternResult)
            break
        }
    }
    return result
}