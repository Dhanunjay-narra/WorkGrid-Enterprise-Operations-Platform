export function generateEventsReplayReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
