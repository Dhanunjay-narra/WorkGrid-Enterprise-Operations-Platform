export type FinanceExpensesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceExpensesPayloadStateMachine {
  private allowedTransitions: Record<FinanceExpensesPayloadState, FinanceExpensesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceExpensesPayloadState, to: FinanceExpensesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceExpensesPayloadState, to: FinanceExpensesPayloadState): FinanceExpensesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceExpensesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
