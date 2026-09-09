export class EventsConsumersMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersMapping" };
  }
}
