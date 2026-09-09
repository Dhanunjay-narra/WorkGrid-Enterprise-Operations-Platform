export function generateProjectSprintsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
