export class EvtConsumerGroupSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for EvtConsumerGroup in events:", query);
    return [{ id: "eve_search_1", matchScore: 0.98, entity: "EvtConsumerGroup" }];
  }
}
