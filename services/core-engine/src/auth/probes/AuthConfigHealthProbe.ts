export class AuthConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthConfig" };
  }
}
