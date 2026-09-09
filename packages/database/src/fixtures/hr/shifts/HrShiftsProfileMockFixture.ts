export function generateHrShiftsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
