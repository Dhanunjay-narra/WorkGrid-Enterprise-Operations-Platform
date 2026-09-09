export function generateHrDepartmentsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
