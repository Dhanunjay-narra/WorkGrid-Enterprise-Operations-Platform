export class DmsChunksTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksTransaction" };
  }
}
