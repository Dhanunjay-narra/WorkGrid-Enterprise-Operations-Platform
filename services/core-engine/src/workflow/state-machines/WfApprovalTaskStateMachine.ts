export type WfApprovalTaskState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfApprovalTaskStateMachine {
  private validTransitions: Record<WfApprovalTaskState, WfApprovalTaskState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfApprovalTaskState, next: WfApprovalTaskState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfApprovalTaskState, next: WfApprovalTaskState): WfApprovalTaskState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfApprovalTask: from " + current + " to " + next);
    }
    return next;
  }
}
