export function generateWorkflowCronsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
