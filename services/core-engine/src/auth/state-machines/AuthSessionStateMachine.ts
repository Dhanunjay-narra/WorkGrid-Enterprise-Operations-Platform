export type AuthSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthSessionStateMachine {
  private allowedTransitions: Record<AuthSessionState, AuthSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthSessionState, to: AuthSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthSessionState, to: AuthSessionState): AuthSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthSession: " + from + " -> " + to);
    }
    return to;
  }
}
