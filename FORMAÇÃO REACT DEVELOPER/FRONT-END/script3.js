/*const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'José',
        idade: 19
    }
]

alunos.push({
    nome: 'João',
    idade: 35
})


console.log(alunos[0].idade)*/
const alunos = [
    {
        nome: 'Pablo',
        idade: 25
    },
    {
        nome: 'José',
        idade: 19
    },
    {
        nome: 'Roberto',
        idade: 16
    }
];

const alunosFiltrados = alunos.filter((aluno => aluno.idade >= 18));
console.table(alunosFiltrados);

const alunoRoberto = alunos.find((aluno => aluno.nome === 'Roberto'));
console.log(alunoRoberto);

const alunoRobertoIndex = alunos.findIndex((aluno => aluno.nome === 'Roberto'));
console.log(alunoRobertoIndex);

const idade = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade;
}, 0);

console.log(idade);

const menor10 = alunos.some((aluno => aluno.idade < 10));
const menorDequenoventa = alunos.every((aluno => aluno.idade < 90));

console.log(menor10);
console.log(menorDequenoventa); 