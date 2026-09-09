export function generateProjectKanbanTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
