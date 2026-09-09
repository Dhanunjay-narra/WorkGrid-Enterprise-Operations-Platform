export type AuthQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthQueueStateMachine {
  private allowedTransitions: Record<AuthQueueState, AuthQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthQueueState, to: AuthQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthQueueState, to: AuthQueueState): AuthQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthQueue: " + from + " -> " + to);
    }
    return to;
  }
}
