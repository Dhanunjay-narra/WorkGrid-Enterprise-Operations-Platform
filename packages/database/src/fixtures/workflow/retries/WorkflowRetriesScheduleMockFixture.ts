export function generateWorkflowRetriesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
