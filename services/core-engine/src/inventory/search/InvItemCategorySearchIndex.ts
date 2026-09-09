export class InvItemCategorySearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for InvItemCategory in inventory:", query);
    return [{ id: "inv_search_1", matchScore: 0.98, entity: "InvItemCategory" }];
  }
}
