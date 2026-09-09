export class IotTelemetryBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryBatch" };
  }
}
