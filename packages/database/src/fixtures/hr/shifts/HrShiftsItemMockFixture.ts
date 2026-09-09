export function generateHrShiftsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
