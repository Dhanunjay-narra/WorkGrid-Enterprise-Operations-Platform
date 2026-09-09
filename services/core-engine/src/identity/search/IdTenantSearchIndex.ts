export class IdTenantSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IdTenant in identity:", query);
    return [{ id: "ide_search_1", matchScore: 0.98, entity: "IdTenant" }];
  }
}
