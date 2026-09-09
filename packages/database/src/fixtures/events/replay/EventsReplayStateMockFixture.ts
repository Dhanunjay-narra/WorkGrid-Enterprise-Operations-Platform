export function generateEventsReplayStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
