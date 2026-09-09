export type BiCohortMetricState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiCohortMetricStateMachine {
  private validTransitions: Record<BiCohortMetricState, BiCohortMetricState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiCohortMetricState, next: BiCohortMetricState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiCohortMetricState, next: BiCohortMetricState): BiCohortMetricState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiCohortMetric: from " + current + " to " + next);
    }
    return next;
  }
}
