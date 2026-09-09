export function generateHrShiftsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
