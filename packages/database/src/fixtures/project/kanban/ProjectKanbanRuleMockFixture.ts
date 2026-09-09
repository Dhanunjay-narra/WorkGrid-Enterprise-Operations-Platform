export function generateProjectKanbanRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
