export function generateProjectGanttThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
