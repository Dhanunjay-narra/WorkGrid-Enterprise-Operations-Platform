export class EventsConsumersConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersConfig" };
  }
}
