export class HrShiftSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for HrShift in hr:", query);
    return [{ id: "hr_search_1", matchScore: 0.98, entity: "HrShift" }];
  }
}
