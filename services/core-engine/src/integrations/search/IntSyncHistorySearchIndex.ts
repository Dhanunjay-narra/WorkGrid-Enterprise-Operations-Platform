export class IntSyncHistorySearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IntSyncHistory in integrations:", query);
    return [{ id: "int_search_1", matchScore: 0.98, entity: "IntSyncHistory" }];
  }
}
