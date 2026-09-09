export function generateHrDepartmentsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
