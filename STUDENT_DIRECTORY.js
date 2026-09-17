const studentForm = document.querySelector('#student-form');
const nameField = document.querySelector('#student-name');
const programField = document.querySelector('#program');
const studentInfo = document.querySelector('#student-information');

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameField.value.trim();
    const program = programField.value.trim();

    if (name === '' || program === '') {
        alert('Please enter the student name and program.');
        return;
    }

    const li = document.createElement('li');

    const nameText = document.createElement('strong');
    nameText.textContent = name;

    const programText = document.createElement('p');
    programText.textContent = `Program: ${program}`;

    li.append(nameText, programText);
    studentInfo.appendChild(li);

    studentForm.reset();
});