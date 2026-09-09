export class DocDocumentSignatureSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for DocDocumentSignature in documents:", query);
    return [{ id: "doc_search_1", matchScore: 0.98, entity: "DocDocumentSignature" }];
  }
}
