export type EvtEventPartitionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtEventPartitionStateMachine {
  private validTransitions: Record<EvtEventPartitionState, EvtEventPartitionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtEventPartitionState, next: EvtEventPartitionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtEventPartitionState, next: EvtEventPartitionState): EvtEventPartitionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtEventPartition: from " + current + " to " + next);
    }
    return next;
  }
}
