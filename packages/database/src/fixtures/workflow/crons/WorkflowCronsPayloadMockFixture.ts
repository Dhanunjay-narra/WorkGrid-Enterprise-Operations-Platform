export function generateWorkflowCronsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
