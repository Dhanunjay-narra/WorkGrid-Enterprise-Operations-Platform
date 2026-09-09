export function generateEventsReplayThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
