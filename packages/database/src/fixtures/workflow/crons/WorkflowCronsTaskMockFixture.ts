export function generateWorkflowCronsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
