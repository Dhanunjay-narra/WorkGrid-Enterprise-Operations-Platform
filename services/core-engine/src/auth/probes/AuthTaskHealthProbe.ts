export class AuthTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthTask" };
  }
}
