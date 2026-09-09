export function generateWorkflowDagScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
