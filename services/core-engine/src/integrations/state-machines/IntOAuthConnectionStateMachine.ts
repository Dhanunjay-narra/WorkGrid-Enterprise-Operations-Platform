export type IntOAuthConnectionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntOAuthConnectionStateMachine {
  private validTransitions: Record<IntOAuthConnectionState, IntOAuthConnectionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntOAuthConnectionState, next: IntOAuthConnectionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntOAuthConnectionState, next: IntOAuthConnectionState): IntOAuthConnectionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntOAuthConnection: from " + current + " to " + next);
    }
    return next;
  }
}
