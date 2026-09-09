export function generateEventsReplayRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
