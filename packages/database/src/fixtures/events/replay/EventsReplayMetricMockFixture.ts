export function generateEventsReplayMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
