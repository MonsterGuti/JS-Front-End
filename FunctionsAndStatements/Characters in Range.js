function charsInRange(startChar, endChar) {
    let startCode = startChar.charCodeAt(0);
    let endCode = endChar.charCodeAt(0);

    let start
    let end

    if (startCode < endCode) {
        start = startCode;
        end = endCode;
    } else {
        start = endCode;
        end = startCode;
    }
    
    let result = '';
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    return result.trim();
}
