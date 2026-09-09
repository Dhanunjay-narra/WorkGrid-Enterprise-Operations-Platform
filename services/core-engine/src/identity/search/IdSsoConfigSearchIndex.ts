export class IdSsoConfigSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IdSsoConfig in identity:", query);
    return [{ id: "ide_search_1", matchScore: 0.98, entity: "IdSsoConfig" }];
  }
}
