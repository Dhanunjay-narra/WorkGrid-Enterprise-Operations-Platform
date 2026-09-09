export type WfWorkflowEdgeState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfWorkflowEdgeStateMachine {
  private validTransitions: Record<WfWorkflowEdgeState, WfWorkflowEdgeState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfWorkflowEdgeState, next: WfWorkflowEdgeState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfWorkflowEdgeState, next: WfWorkflowEdgeState): WfWorkflowEdgeState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfWorkflowEdge: from " + current + " to " + next);
    }
    return next;
  }
}
