const jsonObject = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}
`

const dataJSON = JSON.parse(jsonObject);
const listJSON = dataJSON.list;

const listResult = {
	list: []
}

for (let json of listJSON) {
	listResult.list.push(
		{
			name: json.name,
			age: Number(json.age),
			prof: json.prof
		}
	)
}

console.log(listResult)