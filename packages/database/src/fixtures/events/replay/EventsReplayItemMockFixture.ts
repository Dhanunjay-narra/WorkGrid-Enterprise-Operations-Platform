export function generateEventsReplayItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
