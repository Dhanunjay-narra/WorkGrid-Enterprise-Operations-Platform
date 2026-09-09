export function generateWorkflowRetriesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
