export function generateProjectTasksScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
