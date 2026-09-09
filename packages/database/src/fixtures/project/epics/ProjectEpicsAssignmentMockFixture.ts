export function generateProjectEpicsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
