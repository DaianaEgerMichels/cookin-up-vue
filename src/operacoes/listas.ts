export function ingredientesSelecionadosEstaoEmReceita(ingredientesSelecionados: unknown[], ingredientesReceita: unknown[]): boolean {
    return ingredientesSelecionados.every((ingrediente) => ingredientesReceita.includes(ingrediente));
}
