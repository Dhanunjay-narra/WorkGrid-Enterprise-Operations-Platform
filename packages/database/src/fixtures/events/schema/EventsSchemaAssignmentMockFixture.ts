export function generateEventsSchemaAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_schema",
    entity: "EventsSchemaAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
