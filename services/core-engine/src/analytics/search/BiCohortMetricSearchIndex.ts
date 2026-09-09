export class BiCohortMetricSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for BiCohortMetric in analytics:", query);
    return [{ id: "ana_search_1", matchScore: 0.98, entity: "BiCohortMetric" }];
  }
}
