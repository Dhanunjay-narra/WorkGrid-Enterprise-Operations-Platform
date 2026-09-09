export type FinanceTreasuryMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTreasuryMetricStateMachine {
  private allowedTransitions: Record<FinanceTreasuryMetricState, FinanceTreasuryMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTreasuryMetricState, to: FinanceTreasuryMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTreasuryMetricState, to: FinanceTreasuryMetricState): FinanceTreasuryMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTreasuryMetric: " + from + " -> " + to);
    }
    return to;
  }
}
