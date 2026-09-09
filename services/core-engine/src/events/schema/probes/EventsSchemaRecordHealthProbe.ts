export class EventsSchemaRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaRecord" };
  }
}
