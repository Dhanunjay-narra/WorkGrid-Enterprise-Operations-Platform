export function generateProjectSprintsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
