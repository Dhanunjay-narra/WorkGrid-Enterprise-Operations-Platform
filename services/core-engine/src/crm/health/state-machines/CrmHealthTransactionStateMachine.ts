export type CrmHealthTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthTransactionStateMachine {
  private allowedTransitions: Record<CrmHealthTransactionState, CrmHealthTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthTransactionState, to: CrmHealthTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthTransactionState, to: CrmHealthTransactionState): CrmHealthTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
