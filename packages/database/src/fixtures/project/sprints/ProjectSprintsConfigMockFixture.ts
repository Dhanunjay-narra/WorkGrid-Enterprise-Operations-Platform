export function generateProjectSprintsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
