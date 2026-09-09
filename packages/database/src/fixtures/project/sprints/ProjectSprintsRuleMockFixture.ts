export function generateProjectSprintsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
