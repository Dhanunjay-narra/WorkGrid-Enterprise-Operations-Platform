export function generateProjectWorkspacesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
