export function generateWorkflowRetriesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_retries",
    entity: "WorkflowRetriesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
