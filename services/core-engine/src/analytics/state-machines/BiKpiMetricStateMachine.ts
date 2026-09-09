export type BiKpiMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiKpiMetricStateMachine {
  private validTransitions: Record<BiKpiMetricState, BiKpiMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiKpiMetricState, next: BiKpiMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiKpiMetricState, next: BiKpiMetricState): BiKpiMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiKpiMetric: from " + current + " to " + next);
    }
    return next;
  }
}
