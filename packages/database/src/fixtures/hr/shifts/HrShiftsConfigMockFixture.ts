export function generateHrShiftsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
