export function generateWorkflowCronsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
