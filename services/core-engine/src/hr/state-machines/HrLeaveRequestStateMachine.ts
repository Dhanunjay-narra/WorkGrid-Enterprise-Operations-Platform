export type HrLeaveRequestState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrLeaveRequestStateMachine {
  private validTransitions: Record<HrLeaveRequestState, HrLeaveRequestState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrLeaveRequestState, next: HrLeaveRequestState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrLeaveRequestState, next: HrLeaveRequestState): HrLeaveRequestState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrLeaveRequest: from " + current + " to " + next);
    }
    return next;
  }
}
