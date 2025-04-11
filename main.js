function verifyAge() {
    var inputage = document.getElementById('age').value;

    if (inputage < 18) {
        window.alert('Not eligible to vote');
    } 
    else {
        window.alert('Eligible to vote');
    }
}
