export function generateProjectWorkspacesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
