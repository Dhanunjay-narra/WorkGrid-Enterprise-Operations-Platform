export function generateProjectWorkspacesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
