export function generateHrShiftsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
