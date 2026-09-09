export function generateEventsSchemaScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
