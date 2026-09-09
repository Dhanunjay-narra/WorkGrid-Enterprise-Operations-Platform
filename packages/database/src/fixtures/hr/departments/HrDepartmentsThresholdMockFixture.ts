export function generateHrDepartmentsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
