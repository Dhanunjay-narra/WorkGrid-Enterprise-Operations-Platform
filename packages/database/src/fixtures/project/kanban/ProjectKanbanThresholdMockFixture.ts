export function generateProjectKanbanThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
