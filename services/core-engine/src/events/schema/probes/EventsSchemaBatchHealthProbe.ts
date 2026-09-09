export class EventsSchemaBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaBatch" };
  }
}
