export function generateBiWidgetsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
