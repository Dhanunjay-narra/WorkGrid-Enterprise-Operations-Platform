export function generateProjectKanbanEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
