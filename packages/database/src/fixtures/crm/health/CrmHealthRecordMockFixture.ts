export function generateCrmHealthRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
