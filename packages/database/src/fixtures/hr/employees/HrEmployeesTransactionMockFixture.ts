export function generateHrEmployeesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
