export function generateWorkflowApprovalsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
