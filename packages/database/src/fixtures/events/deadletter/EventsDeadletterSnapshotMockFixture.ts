export function generateEventsDeadletterSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
