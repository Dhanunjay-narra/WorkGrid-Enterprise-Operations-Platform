export function generateProjectWorkspacesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
