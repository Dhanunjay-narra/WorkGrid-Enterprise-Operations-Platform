export class IdAccessReviewSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for IdAccessReview in identity:", query);
    return [{ id: "ide_search_1", matchScore: 0.98, entity: "IdAccessReview" }];
  }
}
