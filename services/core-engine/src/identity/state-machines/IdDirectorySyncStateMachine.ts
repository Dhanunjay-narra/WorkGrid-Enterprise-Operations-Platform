export type IdDirectorySyncState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IdDirectorySyncStateMachine {
  private validTransitions: Record<IdDirectorySyncState, IdDirectorySyncState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IdDirectorySyncState, next: IdDirectorySyncState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IdDirectorySyncState, next: IdDirectorySyncState): IdDirectorySyncState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IdDirectorySync: from " + current + " to " + next);
    }
    return next;
  }
}
