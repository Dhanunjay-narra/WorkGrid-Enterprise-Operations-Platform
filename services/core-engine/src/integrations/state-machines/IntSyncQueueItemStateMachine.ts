export type IntSyncQueueItemState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IntSyncQueueItemStateMachine {
  private validTransitions: Record<IntSyncQueueItemState, IntSyncQueueItemState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IntSyncQueueItemState, next: IntSyncQueueItemState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IntSyncQueueItemState, next: IntSyncQueueItemState): IntSyncQueueItemState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IntSyncQueueItem: from " + current + " to " + next);
    }
    return next;
  }
}
