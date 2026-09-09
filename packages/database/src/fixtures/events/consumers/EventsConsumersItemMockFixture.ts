export function generateEventsConsumersItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
