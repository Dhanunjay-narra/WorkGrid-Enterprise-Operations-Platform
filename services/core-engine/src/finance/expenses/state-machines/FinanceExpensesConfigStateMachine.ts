export type FinanceExpensesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesConfigStateMachine {
  private allowedTransitions: Record<FinanceExpensesConfigState, FinanceExpensesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesConfigState, to: FinanceExpensesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesConfigState, to: FinanceExpensesConfigState): FinanceExpensesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
