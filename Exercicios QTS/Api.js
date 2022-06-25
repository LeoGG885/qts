import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'John Alves'
let professores = ['Silis', 'Bruno', 'Joao', 'Lucas']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "John Alves"); 
    assertStringIncludes(aluno, "John");    
})

Deno.test("Array professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Silis", "Lucas", "João"],
        "Errado!");
})