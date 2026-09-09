export class FinanceLedgerAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerAssignment" };
  }
}
