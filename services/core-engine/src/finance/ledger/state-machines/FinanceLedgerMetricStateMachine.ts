export type FinanceLedgerMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceLedgerMetricStateMachine {
  private allowedTransitions: Record<FinanceLedgerMetricState, FinanceLedgerMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceLedgerMetricState, to: FinanceLedgerMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceLedgerMetricState, to: FinanceLedgerMetricState): FinanceLedgerMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceLedgerMetric: " + from + " -> " + to);
    }
    return to;
  }
}
