export type FinanceExpensesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesProfileStateMachine {
  private allowedTransitions: Record<FinanceExpensesProfileState, FinanceExpensesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesProfileState, to: FinanceExpensesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesProfileState, to: FinanceExpensesProfileState): FinanceExpensesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
