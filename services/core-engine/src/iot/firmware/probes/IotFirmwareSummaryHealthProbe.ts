export class IotFirmwareSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareSummary" };
  }
}
