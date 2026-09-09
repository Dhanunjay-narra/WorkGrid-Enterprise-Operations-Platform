export type BiTimeSeriesProjectionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiTimeSeriesProjectionStateMachine {
  private validTransitions: Record<BiTimeSeriesProjectionState, BiTimeSeriesProjectionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiTimeSeriesProjectionState, next: BiTimeSeriesProjectionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiTimeSeriesProjectionState, next: BiTimeSeriesProjectionState): BiTimeSeriesProjectionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiTimeSeriesProjection: from " + current + " to " + next);
    }
    return next;
  }
}
