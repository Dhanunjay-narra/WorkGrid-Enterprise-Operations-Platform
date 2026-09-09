export function generateCrmHealthProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
