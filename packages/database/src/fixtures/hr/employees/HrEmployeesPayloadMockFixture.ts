export function generateHrEmployeesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
