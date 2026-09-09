export class SupCsatScoreSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for SupCsatScore in support:", query);
    return [{ id: "sup_search_1", matchScore: 0.98, entity: "SupCsatScore" }];
  }
}
