export class DocFileExportJobSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for DocFileExportJob in documents:", query);
    return [{ id: "doc_search_1", matchScore: 0.98, entity: "DocFileExportJob" }];
  }
}
