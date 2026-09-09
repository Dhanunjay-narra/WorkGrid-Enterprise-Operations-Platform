export type WfRetryPolicyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfRetryPolicyStateMachine {
  private validTransitions: Record<WfRetryPolicyState, WfRetryPolicyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfRetryPolicyState, next: WfRetryPolicyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfRetryPolicyState, next: WfRetryPolicyState): WfRetryPolicyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfRetryPolicy: from " + current + " to " + next);
    }
    return next;
  }
}
