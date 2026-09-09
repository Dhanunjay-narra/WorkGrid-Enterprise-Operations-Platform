export type RbacPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacPolicyStateMachine {
  private allowedTransitions: Record<RbacPolicyState, RbacPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacPolicyState, to: RbacPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacPolicyState, to: RbacPolicyState): RbacPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
