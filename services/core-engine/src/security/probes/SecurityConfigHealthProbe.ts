export class SecurityConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityConfig" };
  }
}
