export type AuthPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AuthPolicyStateMachine {
  private allowedTransitions: Record<AuthPolicyState, AuthPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AuthPolicyState, to: AuthPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AuthPolicyState, to: AuthPolicyState): AuthPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AuthPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
