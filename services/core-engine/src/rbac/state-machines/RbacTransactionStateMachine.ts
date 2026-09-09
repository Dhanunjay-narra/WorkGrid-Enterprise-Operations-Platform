export type RbacTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacTransactionStateMachine {
  private allowedTransitions: Record<RbacTransactionState, RbacTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacTransactionState, to: RbacTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacTransactionState, to: RbacTransactionState): RbacTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
