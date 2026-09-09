export function generateProjectSprintsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
