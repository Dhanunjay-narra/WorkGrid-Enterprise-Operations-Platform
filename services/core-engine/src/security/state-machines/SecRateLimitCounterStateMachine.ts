export type SecRateLimitCounterState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SecRateLimitCounterStateMachine {
  private validTransitions: Record<SecRateLimitCounterState, SecRateLimitCounterState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SecRateLimitCounterState, next: SecRateLimitCounterState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SecRateLimitCounterState, next: SecRateLimitCounterState): SecRateLimitCounterState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SecRateLimitCounter: from " + current + " to " + next);
    }
    return next;
  }
}
