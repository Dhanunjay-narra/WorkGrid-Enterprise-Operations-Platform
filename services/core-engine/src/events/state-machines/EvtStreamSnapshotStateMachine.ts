export type EvtStreamSnapshotState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtStreamSnapshotStateMachine {
  private validTransitions: Record<EvtStreamSnapshotState, EvtStreamSnapshotState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtStreamSnapshotState, next: EvtStreamSnapshotState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtStreamSnapshotState, next: EvtStreamSnapshotState): EvtStreamSnapshotState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtStreamSnapshot: from " + current + " to " + next);
    }
    return next;
  }
}
