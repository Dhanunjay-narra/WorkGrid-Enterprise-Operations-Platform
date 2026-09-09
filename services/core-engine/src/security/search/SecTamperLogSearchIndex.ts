export class SecTamperLogSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for SecTamperLog in security:", query);
    return [{ id: "sec_search_1", matchScore: 0.98, entity: "SecTamperLog" }];
  }
}
