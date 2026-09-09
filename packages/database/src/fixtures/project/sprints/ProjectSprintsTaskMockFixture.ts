export function generateProjectSprintsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
