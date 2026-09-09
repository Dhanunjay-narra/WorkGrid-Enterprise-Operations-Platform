export function generateWorkflowDagReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "workflow_dag",
    entity: "WorkflowDagReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
