module.exports = check = (str, bracketsConfig) => {
    let arr = str.split('');


    check = (arr) => {
        for (i = 0; i < arr.length; i++) {
            // console.log(`arr[i] === ${arr[i]}`);
            for (j = 0; j < bracketsConfig.length; j++) {

                if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
                    // console.log(arr[i]);
                    console.log(arr.splice(i, 2));
                    // arr.splice(i, 2);
                    check(arr)
                }
            }
        }
    }
    check(arr);
    return arr.length === 0 ? true : false;
}

/* check('()', [
        ['(', ')']
    ]) // -> true */
/* check('())(', [
        ['(', ')']
    ]) // -> false */
check('([{([()])}])', [
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]) // -> true