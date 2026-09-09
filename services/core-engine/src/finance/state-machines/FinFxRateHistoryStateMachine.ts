export type FinFxRateHistoryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinFxRateHistoryStateMachine {
  private validTransitions: Record<FinFxRateHistoryState, FinFxRateHistoryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinFxRateHistoryState, next: FinFxRateHistoryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinFxRateHistoryState, next: FinFxRateHistoryState): FinFxRateHistoryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinFxRateHistory: from " + current + " to " + next);
    }
    return next;
  }
}
