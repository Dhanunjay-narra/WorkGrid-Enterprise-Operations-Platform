export function generateHrEmployeesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
