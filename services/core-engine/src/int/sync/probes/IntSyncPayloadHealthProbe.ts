export class IntSyncPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncPayload" };
  }
}
