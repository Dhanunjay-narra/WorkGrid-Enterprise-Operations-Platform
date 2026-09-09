export function generateEventsReplayEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
