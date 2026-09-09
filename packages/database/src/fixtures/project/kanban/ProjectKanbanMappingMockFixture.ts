export function generateProjectKanbanMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
