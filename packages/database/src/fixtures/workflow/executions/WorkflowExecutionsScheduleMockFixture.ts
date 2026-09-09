export function generateWorkflowExecutionsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
