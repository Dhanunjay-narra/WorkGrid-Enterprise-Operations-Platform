export function generateProjectWorkspacesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
