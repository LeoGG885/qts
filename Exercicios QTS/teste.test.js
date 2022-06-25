let a = 'oii'
let b = 'hello'

Deno.test("Teste oi (NO API)", () => {
    if (a != "oii") {
        throw new Error(`${a} não é oii`);
    }
})

Deno.test("Não pode ser oi (NO API)", () => {
    if (b == "oii") {
        throw new Error(`${a}  é oii`);
    }
})
