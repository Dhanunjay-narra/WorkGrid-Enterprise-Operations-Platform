export function generateProjectSprintsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
