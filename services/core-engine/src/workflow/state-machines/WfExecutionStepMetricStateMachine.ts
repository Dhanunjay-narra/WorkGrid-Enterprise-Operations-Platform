export type WfExecutionStepMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class WfExecutionStepMetricStateMachine {
  private validTransitions: Record<WfExecutionStepMetricState, WfExecutionStepMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: WfExecutionStepMetricState, next: WfExecutionStepMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: WfExecutionStepMetricState, next: WfExecutionStepMetricState): WfExecutionStepMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for WfExecutionStepMetric: from " + current + " to " + next);
    }
    return next;
  }
}
