export function generateEventsSchemaBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
