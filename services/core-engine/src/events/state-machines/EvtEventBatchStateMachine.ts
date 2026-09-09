export type EvtEventBatchState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtEventBatchStateMachine {
  private validTransitions: Record<EvtEventBatchState, EvtEventBatchState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtEventBatchState, next: EvtEventBatchState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtEventBatchState, next: EvtEventBatchState): EvtEventBatchState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtEventBatch: from " + current + " to " + next);
    }
    return next;
  }
}
