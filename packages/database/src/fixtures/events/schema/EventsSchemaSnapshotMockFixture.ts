export function generateEventsSchemaSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
