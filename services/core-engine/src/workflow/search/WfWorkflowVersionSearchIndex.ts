export class WfWorkflowVersionSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for WfWorkflowVersion in workflow:", query);
    return [{ id: "wor_search_1", matchScore: 0.98, entity: "WfWorkflowVersion" }];
  }
}
