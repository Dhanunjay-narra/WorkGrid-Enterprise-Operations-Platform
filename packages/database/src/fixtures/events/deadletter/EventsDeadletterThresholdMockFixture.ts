export function generateEventsDeadletterThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
