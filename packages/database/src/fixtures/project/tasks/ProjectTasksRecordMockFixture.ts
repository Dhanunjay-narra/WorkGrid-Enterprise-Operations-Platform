export function generateProjectTasksRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
