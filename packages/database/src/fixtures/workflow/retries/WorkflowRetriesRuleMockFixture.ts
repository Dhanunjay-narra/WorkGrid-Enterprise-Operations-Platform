export function generateWorkflowRetriesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
