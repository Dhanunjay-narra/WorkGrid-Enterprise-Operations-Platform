export function generateWorkflowDagPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
