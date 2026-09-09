export function generateProjectSprintsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
