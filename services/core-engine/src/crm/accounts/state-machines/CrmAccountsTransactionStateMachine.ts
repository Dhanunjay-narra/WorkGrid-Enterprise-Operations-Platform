export type CrmAccountsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsTransactionStateMachine {
  private allowedTransitions: Record<CrmAccountsTransactionState, CrmAccountsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsTransactionState, to: CrmAccountsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsTransactionState, to: CrmAccountsTransactionState): CrmAccountsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
