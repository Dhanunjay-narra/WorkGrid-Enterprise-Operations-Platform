export function generateWorkflowEdgesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_edges",
    entity: "WorkflowEdgesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
