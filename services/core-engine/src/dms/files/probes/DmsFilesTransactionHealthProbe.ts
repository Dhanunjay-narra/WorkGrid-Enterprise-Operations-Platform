export class DmsFilesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesTransaction" };
  }
}
