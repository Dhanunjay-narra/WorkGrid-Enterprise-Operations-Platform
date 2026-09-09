export class InvSupplierSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for InvSupplier in inventory:", query);
    return [{ id: "inv_search_1", matchScore: 0.98, entity: "InvSupplier" }];
  }
}
