export type IdentityTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityTransactionStateMachine {
  private allowedTransitions: Record<IdentityTransactionState, IdentityTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityTransactionState, to: IdentityTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityTransactionState, to: IdentityTransactionState): IdentityTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
