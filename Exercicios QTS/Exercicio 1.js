let nome = 'Tom Smith'
let nome2 = ['Lully', 'Dobby', 'Gabriel', 'Pit']

Deno.test("Teste assertions (API)", () => {
    assertEquals(nome, "Tom"); 
    assertStringIncludes(nome, "Smith");    
})

Deno.test("Testando array (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Silis", "Bruno", "João"],
        "Errado!");
})