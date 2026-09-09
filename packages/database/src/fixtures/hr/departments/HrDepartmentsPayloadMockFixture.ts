export function generateHrDepartmentsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
