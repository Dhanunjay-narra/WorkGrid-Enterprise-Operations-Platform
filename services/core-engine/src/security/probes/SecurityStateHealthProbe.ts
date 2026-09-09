export class SecurityStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityState" };
  }
}
