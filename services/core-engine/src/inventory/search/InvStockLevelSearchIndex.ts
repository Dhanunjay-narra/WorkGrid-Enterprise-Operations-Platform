export class InvStockLevelSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for InvStockLevel in inventory:", query);
    return [{ id: "inv_search_1", matchScore: 0.98, entity: "InvStockLevel" }];
  }
}
