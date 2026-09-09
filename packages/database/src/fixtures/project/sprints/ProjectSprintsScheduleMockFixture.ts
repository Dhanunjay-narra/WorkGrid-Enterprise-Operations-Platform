export function generateProjectSprintsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
