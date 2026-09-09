export type FinanceInvoicesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceInvoicesEntryStateMachine {
  private allowedTransitions: Record<FinanceInvoicesEntryState, FinanceInvoicesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceInvoicesEntryState, to: FinanceInvoicesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceInvoicesEntryState, to: FinanceInvoicesEntryState): FinanceInvoicesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceInvoicesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
