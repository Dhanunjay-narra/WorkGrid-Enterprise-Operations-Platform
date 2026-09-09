export function generateHrDepartmentsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
