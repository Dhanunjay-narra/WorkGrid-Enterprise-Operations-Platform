export type AuthProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthProfileStateMachine {
  private allowedTransitions: Record<AuthProfileState, AuthProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthProfileState, to: AuthProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthProfileState, to: AuthProfileState): AuthProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthProfile: " + from + " -> " + to);
    }
    return to;
  }
}
