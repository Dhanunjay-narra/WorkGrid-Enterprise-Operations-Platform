export type HrLeavePolicyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrLeavePolicyStateMachine {
  private validTransitions: Record<HrLeavePolicyState, HrLeavePolicyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrLeavePolicyState, next: HrLeavePolicyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrLeavePolicyState, next: HrLeavePolicyState): HrLeavePolicyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrLeavePolicy: from " + current + " to " + next);
    }
    return next;
  }
}
