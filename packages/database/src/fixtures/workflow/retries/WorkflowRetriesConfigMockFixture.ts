export function generateWorkflowRetriesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
