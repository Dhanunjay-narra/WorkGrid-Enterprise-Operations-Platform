export function generateWorkflowApprovalsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
