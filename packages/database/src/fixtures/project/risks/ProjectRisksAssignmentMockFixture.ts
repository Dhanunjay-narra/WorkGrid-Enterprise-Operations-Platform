export function generateProjectRisksAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
