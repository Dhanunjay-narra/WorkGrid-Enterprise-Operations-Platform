export type AuthTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthTransactionStateMachine {
  private allowedTransitions: Record<AuthTransactionState, AuthTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthTransactionState, to: AuthTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthTransactionState, to: AuthTransactionState): AuthTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
