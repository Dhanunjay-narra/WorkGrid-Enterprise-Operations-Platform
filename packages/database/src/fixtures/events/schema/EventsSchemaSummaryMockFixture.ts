export function generateEventsSchemaSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
