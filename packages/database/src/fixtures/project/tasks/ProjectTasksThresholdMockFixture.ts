export function generateProjectTasksThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
