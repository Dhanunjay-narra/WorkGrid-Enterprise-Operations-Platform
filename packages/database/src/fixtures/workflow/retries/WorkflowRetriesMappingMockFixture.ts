export function generateWorkflowRetriesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
