export function generateProjectCapacityAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
