export type CommCallRoomState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommCallRoomStateMachine {
  private validTransitions: Record<CommCallRoomState, CommCallRoomState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommCallRoomState, next: CommCallRoomState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommCallRoomState, next: CommCallRoomState): CommCallRoomState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommCallRoom: from " + current + " to " + next);
    }
    return next;
  }
}
