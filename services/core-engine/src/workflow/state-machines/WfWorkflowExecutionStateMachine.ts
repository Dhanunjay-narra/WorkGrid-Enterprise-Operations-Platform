export type WfWorkflowExecutionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfWorkflowExecutionStateMachine {
  private validTransitions: Record<WfWorkflowExecutionState, WfWorkflowExecutionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfWorkflowExecutionState, next: WfWorkflowExecutionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfWorkflowExecutionState, next: WfWorkflowExecutionState): WfWorkflowExecutionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfWorkflowExecution: from " + current + " to " + next);
    }
    return next;
  }
}
