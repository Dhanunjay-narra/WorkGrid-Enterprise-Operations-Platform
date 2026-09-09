export function generateWorkflowRetriesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
