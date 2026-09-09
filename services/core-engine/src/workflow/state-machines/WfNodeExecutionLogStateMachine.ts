export type WfNodeExecutionLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfNodeExecutionLogStateMachine {
  private validTransitions: Record<WfNodeExecutionLogState, WfNodeExecutionLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfNodeExecutionLogState, next: WfNodeExecutionLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfNodeExecutionLogState, next: WfNodeExecutionLogState): WfNodeExecutionLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfNodeExecutionLog: from " + current + " to " + next);
    }
    return next;
  }
}
