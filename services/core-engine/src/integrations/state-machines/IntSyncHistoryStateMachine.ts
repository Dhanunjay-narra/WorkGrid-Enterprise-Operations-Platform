export type IntSyncHistoryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntSyncHistoryStateMachine {
  private validTransitions: Record<IntSyncHistoryState, IntSyncHistoryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntSyncHistoryState, next: IntSyncHistoryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntSyncHistoryState, next: IntSyncHistoryState): IntSyncHistoryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntSyncHistory: from " + current + " to " + next);
    }
    return next;
  }
}
