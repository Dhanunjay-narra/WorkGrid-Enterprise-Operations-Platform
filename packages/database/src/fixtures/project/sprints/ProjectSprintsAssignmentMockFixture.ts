export function generateProjectSprintsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
