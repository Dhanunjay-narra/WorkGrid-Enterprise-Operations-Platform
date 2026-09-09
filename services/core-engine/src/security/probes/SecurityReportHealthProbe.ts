export class SecurityReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityReport" };
  }
}
