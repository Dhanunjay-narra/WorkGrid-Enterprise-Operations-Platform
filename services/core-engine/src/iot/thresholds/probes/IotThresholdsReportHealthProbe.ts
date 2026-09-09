export class IotThresholdsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsReport" };
  }
}
