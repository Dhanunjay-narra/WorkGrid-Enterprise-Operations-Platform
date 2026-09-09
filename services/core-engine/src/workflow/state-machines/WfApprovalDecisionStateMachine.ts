export type WfApprovalDecisionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfApprovalDecisionStateMachine {
  private validTransitions: Record<WfApprovalDecisionState, WfApprovalDecisionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfApprovalDecisionState, next: WfApprovalDecisionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfApprovalDecisionState, next: WfApprovalDecisionState): WfApprovalDecisionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfApprovalDecision: from " + current + " to " + next);
    }
    return next;
  }
}
