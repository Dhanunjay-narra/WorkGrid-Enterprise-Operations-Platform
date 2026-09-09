export type AuthEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthEventStateMachine {
  private allowedTransitions: Record<AuthEventState, AuthEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthEventState, to: AuthEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthEventState, to: AuthEventState): AuthEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthEvent: " + from + " -> " + to);
    }
    return to;
  }
}
