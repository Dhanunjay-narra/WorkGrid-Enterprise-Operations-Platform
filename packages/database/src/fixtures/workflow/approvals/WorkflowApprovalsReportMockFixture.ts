export function generateWorkflowApprovalsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_approvals",
    entity: "WorkflowApprovalsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
