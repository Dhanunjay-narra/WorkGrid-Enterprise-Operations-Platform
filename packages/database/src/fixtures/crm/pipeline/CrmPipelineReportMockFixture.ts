export function generateCrmPipelineReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
