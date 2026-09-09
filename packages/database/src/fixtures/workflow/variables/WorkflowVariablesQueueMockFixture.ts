export function generateWorkflowVariablesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_variables",
    entity: "WorkflowVariablesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
