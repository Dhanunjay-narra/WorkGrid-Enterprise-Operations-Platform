export function generateProjectWorkspacesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
