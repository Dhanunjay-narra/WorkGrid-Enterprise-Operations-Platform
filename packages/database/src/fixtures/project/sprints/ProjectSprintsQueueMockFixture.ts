export function generateProjectSprintsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
