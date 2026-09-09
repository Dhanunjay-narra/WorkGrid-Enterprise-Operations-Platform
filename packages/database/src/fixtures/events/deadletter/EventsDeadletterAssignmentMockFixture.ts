export function generateEventsDeadletterAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
