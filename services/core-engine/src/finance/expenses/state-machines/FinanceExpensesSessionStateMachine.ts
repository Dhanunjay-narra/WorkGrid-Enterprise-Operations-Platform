export type FinanceExpensesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesSessionStateMachine {
  private allowedTransitions: Record<FinanceExpensesSessionState, FinanceExpensesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesSessionState, to: FinanceExpensesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesSessionState, to: FinanceExpensesSessionState): FinanceExpensesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesSession: " + from + " -> " + to);
    }
    return to;
  }
}
