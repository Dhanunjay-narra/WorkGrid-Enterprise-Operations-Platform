export function generateProjectGanttTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
