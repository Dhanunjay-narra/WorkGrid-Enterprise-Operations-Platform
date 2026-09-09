export type EvtDeadLetterEventState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class EvtDeadLetterEventStateMachine {
  private validTransitions: Record<EvtDeadLetterEventState, EvtDeadLetterEventState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: EvtDeadLetterEventState, next: EvtDeadLetterEventState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: EvtDeadLetterEventState, next: EvtDeadLetterEventState): EvtDeadLetterEventState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for EvtDeadLetterEvent: from " + current + " to " + next);
    }
    return next;
  }
}
