export function generateProjectWorkspacesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
