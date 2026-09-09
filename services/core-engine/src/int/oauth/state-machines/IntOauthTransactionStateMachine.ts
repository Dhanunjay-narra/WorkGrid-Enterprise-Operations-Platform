export type IntOauthTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthTransactionStateMachine {
  private allowedTransitions: Record<IntOauthTransactionState, IntOauthTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthTransactionState, to: IntOauthTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthTransactionState, to: IntOauthTransactionState): IntOauthTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
