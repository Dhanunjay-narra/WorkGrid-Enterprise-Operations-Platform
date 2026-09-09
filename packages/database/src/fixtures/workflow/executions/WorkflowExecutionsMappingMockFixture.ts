export function generateWorkflowExecutionsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
