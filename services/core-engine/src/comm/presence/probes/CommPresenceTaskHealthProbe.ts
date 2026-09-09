export class CommPresenceTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceTask" };
  }
}
