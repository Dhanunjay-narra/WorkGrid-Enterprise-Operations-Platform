export function generateProjectKanbanConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
