export function generateEventsReplaySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplaySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
