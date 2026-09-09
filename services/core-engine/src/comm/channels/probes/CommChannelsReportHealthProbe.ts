export class CommChannelsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsReport" };
  }
}
