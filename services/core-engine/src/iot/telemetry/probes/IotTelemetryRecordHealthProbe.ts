export class IotTelemetryRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryRecord" };
  }
}
