function* getStudents() {
    yield 'Abbi';
    yield 'DShane';
    yield 'Katy';
    yield 'Lisa';
    yield 'Parish';
}

function main() {
    const students = getStudents();
    for (const value of students) {
        console.log (value);
    }
    
}

main();