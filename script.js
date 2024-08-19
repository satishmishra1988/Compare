function preprocessText(text) {
    return text.replace(/\s+/g, ' ').trim();
}

function compareTexts() {
    const text1 = preprocessText(document.getElementById('text1').value);
    const text2 = preprocessText(document.getElementById('text2').value);

    const diff = Diff.diffWords(text1, text2);
    let resultHtml = '';

    diff.forEach(part => {
        const colorClass = part.added ? 'added' : part.removed ? 'removed' : '';
        resultHtml += `<span class="${colorClass}">${part.value}</span>`;
    });

    document.getElementById('result').innerHTML = resultHtml;
}
