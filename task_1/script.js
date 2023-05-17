const xmlObject = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlObject, 'text/xml');

listResult = {
	list: []
}

const listNode = xmlDOM.querySelector('list');
const listStudent = listNode.querySelectorAll('student');
for (let student of listStudent) {
	const nameStudent = student.querySelector('name');
	const firstName = nameStudent.querySelector('first');
	const secondName = nameStudent.querySelector('second');
	const langName = nameStudent.getAttribute('lang');
	const ageStudent = student.querySelector('age');
	const profStudent = student.querySelector('prof');
	const objectStudent = {
		name: `${firstName.textContent} ${secondName.textContent}`, 
		age: Number(ageStudent.textContent), 
		prof: profStudent.textContent, 
		lang: langName
	}
	listResult.list.push(objectStudent)
}
console.log(listResult);
