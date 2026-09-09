export type IntAuthTokenPairState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntAuthTokenPairStateMachine {
  private validTransitions: Record<IntAuthTokenPairState, IntAuthTokenPairState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntAuthTokenPairState, next: IntAuthTokenPairState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntAuthTokenPairState, next: IntAuthTokenPairState): IntAuthTokenPairState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntAuthTokenPair: from " + current + " to " + next);
    }
    return next;
  }
}
