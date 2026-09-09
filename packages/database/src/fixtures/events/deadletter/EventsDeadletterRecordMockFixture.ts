export function generateEventsDeadletterRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
