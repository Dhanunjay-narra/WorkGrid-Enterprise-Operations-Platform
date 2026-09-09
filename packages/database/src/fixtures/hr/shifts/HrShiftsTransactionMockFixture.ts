export function generateHrShiftsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
