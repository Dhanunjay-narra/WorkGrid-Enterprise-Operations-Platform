export function generateEventsSchemaRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
