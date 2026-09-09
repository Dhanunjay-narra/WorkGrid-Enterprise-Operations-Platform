export class CommNotificationPreferenceSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for CommNotificationPreference in communication:", query);
    return [{ id: "com_search_1", matchScore: 0.98, entity: "CommNotificationPreference" }];
  }
}
