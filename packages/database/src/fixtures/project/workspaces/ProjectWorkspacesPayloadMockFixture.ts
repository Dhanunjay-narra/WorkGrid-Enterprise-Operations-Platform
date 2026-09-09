export function generateProjectWorkspacesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_workspaces",
    entity: "ProjectWorkspacesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
