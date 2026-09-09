export class FinTaxRateSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for FinTaxRate in finance:", query);
    return [{ id: "fin_search_1", matchScore: 0.98, entity: "FinTaxRate" }];
  }
}
