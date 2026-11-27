export const WA = (phone: string, msg: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
export const MAIN_PHONE = "5524981356579";
export const IMG = "https://www.rijux.com.br/images";

export type Item = { name: string; desc: string; img: string; price?: string; old?: string; tag?: string };

export const kits: Item[] = [
  { name: "Kit Limpeza Completo", img: "kits/kit-limpeza-completo", price: "R$ 75,00", old: "R$ 125,00", desc: "Detergente, água sanitária, desinfetante, multiuso, lã de aço, alvejante, sabão em pasta, pano multiuso, sacos de lixo e papel higiênico 12 rolos." },
  { name: "Kit Limpeza Completo Premium", img: "kits/kit-limpeza-completo-premium", price: "R$ 109,90", desc: "Desinfetantes, detergente, água sanitária, lã de aço, esponja, sabão em pasta e papel higiênico Carinho Premium 12 rolos." },
  { name: "Kit Limpeza Cozinha Completa", img: "kits/kit-cozinha-completa", price: "R$ 46,99", desc: "Água sanitária 1L, 2 detergentes, esponja, lã de aço, multiuso Ypê, pano de prato, pano multiuso, sabão pastoso 500g, saco de lixo 30L e vinagre de álcool." },
  { name: "Kit Limpeza Cozinha Econômica", img: "kits/kit-cozinha-economica", price: "R$ 34,99", desc: "Água sanitária, multiuso Barra, esponja, lã de aço, 2 detergentes, vinagre de álcool, pano multiuso, pano de prato, saco de lixo 30L e sabão pastoso 200g." },
  { name: "Kit Limpeza Banheiro", img: "kits/kit-banheiro", price: "R$ 44,50", desc: "Água sanitária, detergente, desinfetante, pedra sanitária, multiuso Barra, vinagre, esponja, saco alvejado, sacos de lixo, papel higiênico, pasta dental e 2 sabonetes." },
  { name: "Kit Lavanderia", img: "kits/kit-lavanderia", price: "R$ 57,20", desc: "Água sanitária 1L, alvejante Suprema 1,5L, amaciante 2L, detergente, lava-roupas líquido 3L, sabão em barra, pano alvejado e vinagre de álcool." },
  { name: "Kit Lavanderia Econômica", img: "kits/kit-lavanderia-economica", price: "R$ 32,00", desc: "Água sanitária 1L, amaciante Pelouche 2L, sabão de coco em pedra, detergente, vinagre de álcool e 2 lava-roupas Astra 800g." },
];

export const produtos: Item[] = [
  { name: "Lava-Louças Brilux Neutro 5L", img: "produtos/lava-loucas-brilux-5l", price: "R$ 27,90", tag: "Econômica", desc: "Embalagem econômica, fórmula neutra, rende mais. Ideal para casa ou negócio." },
  { name: "Sabão Líquido Tixan Ypê 3L", img: "produtos/sabao-liquido-tixan-3l", price: "R$ 29,98", tag: "Promoção", desc: "Limpeza profunda e perfume duradouro. Versões azul e Maciez." },
  { name: "Lava-Roupas em Pó Astra 1,6kg", img: "produtos/lava-roupas-astra-1-6kg", price: "R$ 10,49", tag: "Promoção", desc: "Branco mais alvo e cores mais vivas. Fragrância floral amadeirado." },
  { name: "Lava-Roupas em Pó Astra 800g", img: "produtos/lava-roupas-astra-800g", price: "R$ 6,60", desc: "Remove sujeiras e manchas, fragrância duradoura. Para todos os tipos de roupa." },
  { name: "Alvejante Suprema 1,5L", img: "produtos/alvejante-suprema-1-5l", price: "R$ 14,20", desc: "Sem cloro, não danifica os tecidos. Versões para roupas brancas e coloridas." },
  { name: "Amaciante Urca 2L Brisa da Primavera", img: "produtos/amaciante-urca-brisa", desc: "Roupas mais macias e perfumadas por muito mais tempo." },
  { name: "Amaciante Urca 2L Paixão Sedutora", img: "produtos/amaciante-urca-paixao", desc: "Com cápsulas que perfumam. Leve 2L, pague 1,8L." },
  { name: "Desinfetante Urca Antibac 2L", img: "produtos/desinfetante-urca-antibac", price: "R$ 8,17 cada", tag: "Promoção", desc: "Elimina 99,9% dos germes. Eucalipto com citronela ou pinho." },
  { name: "Desinfetante Pinho Barra 2L", img: "produtos/desinfetante-pinho-barra", price: "R$ 9,61", desc: "Elimina germes e bactérias, limpa e perfuma por mais tempo." },
  { name: "Limpador Multiuso Barra Floral 2L", img: "produtos/multiuso-barra-floral", price: "R$ 9,61", desc: "Limpa, perfuma e desinfeta cozinha, banheiro, pisos e superfícies." },
  { name: "Multiuso Barra Clássico", img: "produtos/multiuso-barra-classico", price: "R$ 3,33", desc: "Limpa e desengordura, deixa brilho. Para várias superfícies da casa." },
  { name: "Pedra Sanitária Q-odor", img: "produtos/pedra-sanitaria-q-odor", price: "R$ 3,39", desc: "Neutraliza maus odores. Fragrâncias Floral, Pinho, Marine e Lavanda." },
];

export const vendedores = [
  { name: "Jaderson Santana", phone: "5524981356579", label: "(24) 98135-6579", img: "vendedor-jaderson", greet: "Olá Jaderson!" },
  { name: "Renan", phone: "5524981044966", label: "(24) 98104-4966", img: "vendedor-renan", greet: "Olá Renan!" },
  { name: "Loja RiJux", phone: "5524981501151", label: "(24) 98150-1151", img: "vendedor-loja", greet: "Olá!" },
];
