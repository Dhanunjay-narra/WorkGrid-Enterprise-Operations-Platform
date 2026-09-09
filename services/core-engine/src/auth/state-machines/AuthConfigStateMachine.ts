export type AuthConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthConfigStateMachine {
  private allowedTransitions: Record<AuthConfigState, AuthConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthConfigState, to: AuthConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthConfigState, to: AuthConfigState): AuthConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthConfig: " + from + " -> " + to);
    }
    return to;
  }
}
