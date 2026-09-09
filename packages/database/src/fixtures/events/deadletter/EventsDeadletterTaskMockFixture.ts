export function generateEventsDeadletterTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
