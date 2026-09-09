export function generateEventsSchemaTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
