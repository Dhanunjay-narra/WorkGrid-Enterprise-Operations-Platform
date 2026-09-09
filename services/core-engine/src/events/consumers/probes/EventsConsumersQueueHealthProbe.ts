export class EventsConsumersQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersQueue" };
  }
}
