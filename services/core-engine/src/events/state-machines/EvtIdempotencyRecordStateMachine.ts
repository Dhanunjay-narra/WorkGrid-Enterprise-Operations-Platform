export type EvtIdempotencyRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtIdempotencyRecordStateMachine {
  private validTransitions: Record<EvtIdempotencyRecordState, EvtIdempotencyRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtIdempotencyRecordState, next: EvtIdempotencyRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtIdempotencyRecordState, next: EvtIdempotencyRecordState): EvtIdempotencyRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtIdempotencyRecord: from " + current + " to " + next);
    }
    return next;
  }
}
