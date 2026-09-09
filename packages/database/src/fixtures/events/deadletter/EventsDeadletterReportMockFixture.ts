export function generateEventsDeadletterReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
