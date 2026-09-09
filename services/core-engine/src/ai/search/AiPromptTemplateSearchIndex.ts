export class AiPromptTemplateSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for AiPromptTemplate in ai:", query);
    return [{ id: "ai_search_1", matchScore: 0.98, entity: "AiPromptTemplate" }];
  }
}
