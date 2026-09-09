export type IntOauthPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthPolicyStateMachine {
  private allowedTransitions: Record<IntOauthPolicyState, IntOauthPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthPolicyState, to: IntOauthPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthPolicyState, to: IntOauthPolicyState): IntOauthPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
