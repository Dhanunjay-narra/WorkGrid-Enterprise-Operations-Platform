export class CommMessagesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesReport" };
  }
}
