export function generateEventsDeadletterPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
