export class SecurityProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityProfile" };
  }
}
