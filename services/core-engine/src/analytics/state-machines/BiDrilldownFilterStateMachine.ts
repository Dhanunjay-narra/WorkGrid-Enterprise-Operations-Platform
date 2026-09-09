export type BiDrilldownFilterState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiDrilldownFilterStateMachine {
  private validTransitions: Record<BiDrilldownFilterState, BiDrilldownFilterState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiDrilldownFilterState, next: BiDrilldownFilterState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiDrilldownFilterState, next: BiDrilldownFilterState): BiDrilldownFilterState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiDrilldownFilter: from " + current + " to " + next);
    }
    return next;
  }
}
