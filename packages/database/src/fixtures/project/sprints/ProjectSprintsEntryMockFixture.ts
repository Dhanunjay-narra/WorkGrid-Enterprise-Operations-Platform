export function generateProjectSprintsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
