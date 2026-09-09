export function generateProjectTasksMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
