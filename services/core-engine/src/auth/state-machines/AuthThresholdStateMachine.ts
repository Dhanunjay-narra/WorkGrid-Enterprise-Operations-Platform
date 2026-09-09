export type AuthThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthThresholdStateMachine {
  private allowedTransitions: Record<AuthThresholdState, AuthThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthThresholdState, to: AuthThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthThresholdState, to: AuthThresholdState): AuthThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
