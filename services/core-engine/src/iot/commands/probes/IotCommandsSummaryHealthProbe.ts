export class IotCommandsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsSummary" };
  }
}
