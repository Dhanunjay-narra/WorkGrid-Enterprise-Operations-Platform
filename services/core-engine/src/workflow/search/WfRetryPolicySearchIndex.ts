export class WfRetryPolicySearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for WfRetryPolicy in workflow:", query);
    return [{ id: "wor_search_1", matchScore: 0.98, entity: "WfRetryPolicy" }];
  }
}
