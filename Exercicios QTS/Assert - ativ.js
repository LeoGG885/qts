import {
    assertExists,
    assertMatch,
    assertNotMatch,
    assertNotEquals
} from "http://deno.land/std/testing/asserts.ts"

let livros = ['Fundação','Duna'];
let pgs = [99, 78];
let imgs = 0;
Deno.test("Teste definação da assert", () => {
    assertExists(livros, "Variavel livros não encontrada");
    assertExists(pgs, "Variavel pgs não encontrada");
    assertExists(imgs, "Variavel imgs não encontrada");
  })

Deno.test("Teste de não existencia", () => {
    assertNotEquals(livros, "Livro 2", "Erro: há um Duna");
    assertNotEquals(pgs, 98, "Erro: há uma pagina 22");
    assertNotEquals(imgs, 'foto1', "Erro: há a foto1");
  });

  const Url = new RegExp("^https?://[a-z.]+.com$");

Deno.test("Verificação (certo)", () => {
    assertMatch("https://www.twitter.com", Url, "Erro: a url não esta relacionada com o desejado");
    assertMatch("https://facebook.com", Url), "Erro: a url não esta relacionada com o desejado";
  });

Deno.test("Verificação (errado)", () => {
    assertNotMatch("https://www.twitch.tv/", Url, "Erro: essa url esta correta");
  });
