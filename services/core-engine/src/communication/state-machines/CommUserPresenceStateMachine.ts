export type CommUserPresenceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommUserPresenceStateMachine {
  private validTransitions: Record<CommUserPresenceState, CommUserPresenceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommUserPresenceState, next: CommUserPresenceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommUserPresenceState, next: CommUserPresenceState): CommUserPresenceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommUserPresence: from " + current + " to " + next);
    }
    return next;
  }
}
