export function generateHrShiftsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
