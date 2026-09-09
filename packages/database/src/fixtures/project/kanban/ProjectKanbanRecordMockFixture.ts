export function generateProjectKanbanRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
