export function generateProjectSprintsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
