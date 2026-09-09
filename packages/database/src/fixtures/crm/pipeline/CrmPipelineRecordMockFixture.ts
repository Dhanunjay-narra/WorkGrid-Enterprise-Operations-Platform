export function generateCrmPipelineRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_pipeline",
    entity: "CrmPipelineRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
