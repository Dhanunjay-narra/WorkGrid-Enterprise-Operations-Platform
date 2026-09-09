export function generateEventsConsumersAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
