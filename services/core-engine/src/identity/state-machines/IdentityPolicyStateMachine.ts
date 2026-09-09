export type IdentityPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityPolicyStateMachine {
  private allowedTransitions: Record<IdentityPolicyState, IdentityPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityPolicyState, to: IdentityPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityPolicyState, to: IdentityPolicyState): IdentityPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
