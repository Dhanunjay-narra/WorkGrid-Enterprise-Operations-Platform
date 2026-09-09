export type BiAnomalyThresholdState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiAnomalyThresholdStateMachine {
  private validTransitions: Record<BiAnomalyThresholdState, BiAnomalyThresholdState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiAnomalyThresholdState, next: BiAnomalyThresholdState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiAnomalyThresholdState, next: BiAnomalyThresholdState): BiAnomalyThresholdState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiAnomalyThreshold: from " + current + " to " + next);
    }
    return next;
  }
}
