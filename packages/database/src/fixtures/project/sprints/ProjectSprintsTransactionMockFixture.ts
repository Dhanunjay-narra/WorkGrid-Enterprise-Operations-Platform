export function generateProjectSprintsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
