export function generateEventsConsumersRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
