export function generateCrmPipelineSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
