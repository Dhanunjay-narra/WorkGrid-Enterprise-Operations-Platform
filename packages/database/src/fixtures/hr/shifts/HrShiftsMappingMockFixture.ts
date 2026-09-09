export function generateHrShiftsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
