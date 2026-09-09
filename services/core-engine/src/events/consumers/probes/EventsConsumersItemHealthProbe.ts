export class EventsConsumersItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersItem" };
  }
}
