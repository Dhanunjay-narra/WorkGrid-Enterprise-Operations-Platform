export function generateEventsDeadletterQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
