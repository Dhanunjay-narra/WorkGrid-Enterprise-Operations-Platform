export type SupSlaTimerState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupSlaTimerStateMachine {
  private validTransitions: Record<SupSlaTimerState, SupSlaTimerState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupSlaTimerState, next: SupSlaTimerState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupSlaTimerState, next: SupSlaTimerState): SupSlaTimerState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupSlaTimer: from " + current + " to " + next);
    }
    return next;
  }
}
