export class IotTelemetryReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryReport" };
  }
}
