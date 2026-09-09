export type WfWorkflowVersionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfWorkflowVersionStateMachine {
  private validTransitions: Record<WfWorkflowVersionState, WfWorkflowVersionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfWorkflowVersionState, next: WfWorkflowVersionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfWorkflowVersionState, next: WfWorkflowVersionState): WfWorkflowVersionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfWorkflowVersion: from " + current + " to " + next);
    }
    return next;
  }
}
