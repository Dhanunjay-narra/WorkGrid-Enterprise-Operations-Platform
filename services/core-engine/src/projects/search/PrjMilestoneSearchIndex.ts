export class PrjMilestoneSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for PrjMilestone in projects:", query);
    return [{ id: "pro_search_1", matchScore: 0.98, entity: "PrjMilestone" }];
  }
}
