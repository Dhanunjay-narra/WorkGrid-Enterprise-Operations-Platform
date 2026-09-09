export function generateProjectSprintsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
