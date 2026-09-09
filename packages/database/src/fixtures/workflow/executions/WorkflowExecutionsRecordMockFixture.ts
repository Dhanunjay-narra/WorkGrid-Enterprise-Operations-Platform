export function generateWorkflowExecutionsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_executions",
    entity: "WorkflowExecutionsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
