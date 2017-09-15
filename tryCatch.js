// a simple example of using JS try-catch-finally blocks to avoid type errors during runtime

const reverseString = (s) => {
    try {
        s = s.split('').reverse().join('');
    } catch(err) {
        if (err) {
            console.log(err.message);
        }
    } finally {
        console.log(s);
    }
};