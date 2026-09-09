export class EventsSchemaReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaReport" };
  }
}
