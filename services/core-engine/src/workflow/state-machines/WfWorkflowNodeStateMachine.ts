export type WfWorkflowNodeState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfWorkflowNodeStateMachine {
  private validTransitions: Record<WfWorkflowNodeState, WfWorkflowNodeState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfWorkflowNodeState, next: WfWorkflowNodeState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfWorkflowNodeState, next: WfWorkflowNodeState): WfWorkflowNodeState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfWorkflowNode: from " + current + " to " + next);
    }
    return next;
  }
}
