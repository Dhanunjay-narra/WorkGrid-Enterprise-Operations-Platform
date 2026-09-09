export function generateProjectKanbanSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
