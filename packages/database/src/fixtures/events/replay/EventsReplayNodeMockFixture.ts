export function generateEventsReplayNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
