export function generateProjectWorkspacesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
