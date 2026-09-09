export function generateHrShiftsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
