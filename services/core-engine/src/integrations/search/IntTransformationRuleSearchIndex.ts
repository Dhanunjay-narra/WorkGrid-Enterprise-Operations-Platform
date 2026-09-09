export class IntTransformationRuleSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IntTransformationRule in integrations:", query);
    return [{ id: "int_search_1", matchScore: 0.98, entity: "IntTransformationRule" }];
  }
}
