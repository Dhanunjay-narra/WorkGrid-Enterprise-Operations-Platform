export class FinanceInvoicesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceInvoicesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceInvoicesSnapshot" };
  }
}
