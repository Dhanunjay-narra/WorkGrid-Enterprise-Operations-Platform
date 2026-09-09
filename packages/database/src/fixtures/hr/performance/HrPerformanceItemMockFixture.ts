export function generateHrPerformanceItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
