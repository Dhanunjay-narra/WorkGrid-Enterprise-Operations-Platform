export class SecAccessReviewScheduleSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for SecAccessReviewSchedule in security:", query);
    return [{ id: "sec_search_1", matchScore: 0.98, entity: "SecAccessReviewSchedule" }];
  }
}
