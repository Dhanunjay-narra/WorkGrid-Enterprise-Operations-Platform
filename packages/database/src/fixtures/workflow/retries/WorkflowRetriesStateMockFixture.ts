export function generateWorkflowRetriesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
