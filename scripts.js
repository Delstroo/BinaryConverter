let conversionType = 'ipv4';

function setConversionType(type) {
    conversionType = type;

    document.getElementById('toggle-ipv4').classList.toggle('active', type === 'ipv4');
    document.getElementById('toggle-text').classList.toggle('active', type === 'text');
    document.getElementById('result').textContent = '';
    document.getElementById('binary-input').value = '';
}

function convertBinary() {
    const binaryInput = document.getElementById('binary-input').value;
    const resultElement = document.getElementById('result');

    if (conversionType === 'ipv4') {
        const binaryGroups = binaryInput.split('.');
        if (binaryGroups.length !== 4 || binaryGroups.some(group => group.length !== 8)) {
            resultElement.textContent = 'Invalid binary string. Must be in the form of 8-bit groups separated by periods.';
            return;
        }

        const octets = binaryGroups.map(bin => parseInt(bin, 2));
        const ipv4Address = octets.join('.');

        resultElement.textContent = ipv4Address;
    } else if (conversionType === 'text') {
        const binaryString = binaryInput.replace(/\s+/g, '');
        if (binaryString.length % 8 !== 0) {
            resultElement.textContent = 'Invalid binary string. Must be divisible by 8.';
            return;
        }

        const text = binaryString.match(/.{1,8}/g).map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
        resultElement.textContent = text;
    }
}
