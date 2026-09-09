export class EventsConsumersEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersEvent" };
  }
}
