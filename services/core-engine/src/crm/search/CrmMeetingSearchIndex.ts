export class CrmMeetingSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for CrmMeeting in crm:", query);
    return [{ id: "crm_search_1", matchScore: 0.98, entity: "CrmMeeting" }];
  }
}
