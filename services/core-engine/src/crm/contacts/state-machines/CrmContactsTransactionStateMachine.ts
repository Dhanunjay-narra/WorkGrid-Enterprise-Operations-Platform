export type CrmContactsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsTransactionStateMachine {
  private allowedTransitions: Record<CrmContactsTransactionState, CrmContactsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsTransactionState, to: CrmContactsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsTransactionState, to: CrmContactsTransactionState): CrmContactsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
