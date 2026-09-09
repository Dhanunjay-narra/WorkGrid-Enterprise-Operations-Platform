export function generateEventsSchemaReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
