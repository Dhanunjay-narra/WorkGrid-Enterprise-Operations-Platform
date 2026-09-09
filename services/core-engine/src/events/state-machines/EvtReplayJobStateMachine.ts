export type EvtReplayJobState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtReplayJobStateMachine {
  private validTransitions: Record<EvtReplayJobState, EvtReplayJobState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtReplayJobState, next: EvtReplayJobState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtReplayJobState, next: EvtReplayJobState): EvtReplayJobState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtReplayJob: from " + current + " to " + next);
    }
    return next;
  }
}
