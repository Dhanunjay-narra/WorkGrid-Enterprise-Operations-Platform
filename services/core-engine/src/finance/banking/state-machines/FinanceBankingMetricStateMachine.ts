export type FinanceBankingMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingMetricStateMachine {
  private allowedTransitions: Record<FinanceBankingMetricState, FinanceBankingMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingMetricState, to: FinanceBankingMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingMetricState, to: FinanceBankingMetricState): FinanceBankingMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingMetric: " + from + " -> " + to);
    }
    return to;
  }
}
