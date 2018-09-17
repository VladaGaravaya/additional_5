module.exports = function check(str, bracketsConfig) {
        let opening = {
            '[': ']',
            '{': '}',
            '(': ')',
            '|': '|',
            '1':'2',
            '3':'4',
            '5':'6',
            '7':'7',
            '8':'8',
        };

        let stack = [];

        for(let i = 0; i < str.length; i++){
            let c = str[i];

            if(opening[c]){
                stack.push(c);
            } else {
                if(stack.length === 0){
                    return false;
                }

                let br = stack.pop();

                if(c!==opening[br]){
                    return false;
                }
            }

        }
        if (stack.length > 0){
            return false;
        } else if(stack.length==0){
            return true;
        }
}
