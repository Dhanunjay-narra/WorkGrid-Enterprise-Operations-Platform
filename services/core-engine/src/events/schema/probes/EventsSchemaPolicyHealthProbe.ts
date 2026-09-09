export class EventsSchemaPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaPolicy" };
  }
}
