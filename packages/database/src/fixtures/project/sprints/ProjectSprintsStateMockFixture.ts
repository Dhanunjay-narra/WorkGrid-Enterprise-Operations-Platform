export function generateProjectSprintsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
