export function generateProjectWorkspacesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
