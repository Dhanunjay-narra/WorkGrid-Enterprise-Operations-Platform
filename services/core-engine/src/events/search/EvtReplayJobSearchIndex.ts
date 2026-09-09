export class EvtReplayJobSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for EvtReplayJob in events:", query);
    return [{ id: "eve_search_1", matchScore: 0.98, entity: "EvtReplayJob" }];
  }
}
