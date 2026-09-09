export function generateEventsDeadletterScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
