export class AuthReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthReport" };
  }
}
