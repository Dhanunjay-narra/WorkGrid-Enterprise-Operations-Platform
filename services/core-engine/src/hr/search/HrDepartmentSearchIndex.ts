export class HrDepartmentSearchIndex {
  public async search(tenantId: string, query: string): Promise<any[]> {
    console.log("[SEARCH-INDEX] Elastic query for HrDepartment in hr:", query);
    return [{ id: "hr_search_1", matchScore: 0.98, entity: "HrDepartment" }];
  }
}
