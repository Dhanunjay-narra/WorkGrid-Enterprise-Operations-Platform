export function generateWorkflowApprovalsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
