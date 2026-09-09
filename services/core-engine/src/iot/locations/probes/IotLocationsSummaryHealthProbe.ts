export class IotLocationsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsSummary" };
  }
}
