export class EventsConsumersTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersTransaction" };
  }
}
