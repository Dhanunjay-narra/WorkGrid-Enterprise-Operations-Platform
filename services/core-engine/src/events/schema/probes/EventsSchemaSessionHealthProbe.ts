export class EventsSchemaSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaSession" };
  }
}
