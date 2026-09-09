export function generateProjectSprintsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
