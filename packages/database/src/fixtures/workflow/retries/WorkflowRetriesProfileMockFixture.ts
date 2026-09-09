export function generateWorkflowRetriesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
