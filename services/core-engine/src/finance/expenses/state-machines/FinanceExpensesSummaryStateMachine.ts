export type FinanceExpensesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesSummaryStateMachine {
  private allowedTransitions: Record<FinanceExpensesSummaryState, FinanceExpensesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesSummaryState, to: FinanceExpensesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesSummaryState, to: FinanceExpensesSummaryState): FinanceExpensesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
