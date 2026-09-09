export function generateWorkflowCronsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_crons",
    entity: "WorkflowCronsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
