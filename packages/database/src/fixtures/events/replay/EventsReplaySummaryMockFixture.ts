export function generateEventsReplaySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplaySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
