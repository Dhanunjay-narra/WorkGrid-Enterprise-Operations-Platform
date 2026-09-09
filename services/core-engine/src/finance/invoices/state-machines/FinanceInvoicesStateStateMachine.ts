export type FinanceInvoicesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceInvoicesStateStateMachine {
  private allowedTransitions: Record<FinanceInvoicesStateState, FinanceInvoicesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceInvoicesStateState, to: FinanceInvoicesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceInvoicesStateState, to: FinanceInvoicesStateState): FinanceInvoicesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceInvoicesState: " + from + " -> " + to);
    }
    return to;
  }
}
