export type SecurityTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityTransactionStateMachine {
  private allowedTransitions: Record<SecurityTransactionState, SecurityTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityTransactionState, to: SecurityTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityTransactionState, to: SecurityTransactionState): SecurityTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
