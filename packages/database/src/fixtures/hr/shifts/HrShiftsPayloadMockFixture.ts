export function generateHrShiftsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
