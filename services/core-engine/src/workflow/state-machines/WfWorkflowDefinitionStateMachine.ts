export type WfWorkflowDefinitionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfWorkflowDefinitionStateMachine {
  private validTransitions: Record<WfWorkflowDefinitionState, WfWorkflowDefinitionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfWorkflowDefinitionState, next: WfWorkflowDefinitionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfWorkflowDefinitionState, next: WfWorkflowDefinitionState): WfWorkflowDefinitionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfWorkflowDefinition: from " + current + " to " + next);
    }
    return next;
  }
}
