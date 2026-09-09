export function generateEventsReplayQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
