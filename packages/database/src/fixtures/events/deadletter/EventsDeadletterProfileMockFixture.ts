export function generateEventsDeadletterProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
