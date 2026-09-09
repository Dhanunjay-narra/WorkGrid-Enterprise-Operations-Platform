export function generateEventsOutboxAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_outbox",
    entity: "EventsOutboxAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
