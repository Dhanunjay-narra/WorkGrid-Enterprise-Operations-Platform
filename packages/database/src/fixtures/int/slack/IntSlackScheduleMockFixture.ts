export function generateIntSlackScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
