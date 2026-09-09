export type FinanceExpensesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesMappingStateMachine {
  private allowedTransitions: Record<FinanceExpensesMappingState, FinanceExpensesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesMappingState, to: FinanceExpensesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesMappingState, to: FinanceExpensesMappingState): FinanceExpensesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
