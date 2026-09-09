export type FinanceBankingSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingSummaryStateMachine {
  private allowedTransitions: Record<FinanceBankingSummaryState, FinanceBankingSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingSummaryState, to: FinanceBankingSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingSummaryState, to: FinanceBankingSummaryState): FinanceBankingSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingSummary: " + from + " -> " + to);
    }
    return to;
  }
}
