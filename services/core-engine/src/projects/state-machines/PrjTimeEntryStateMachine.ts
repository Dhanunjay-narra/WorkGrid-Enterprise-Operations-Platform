export type PrjTimeEntryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjTimeEntryStateMachine {
  private validTransitions: Record<PrjTimeEntryState, PrjTimeEntryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjTimeEntryState, next: PrjTimeEntryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjTimeEntryState, next: PrjTimeEntryState): PrjTimeEntryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjTimeEntry: from " + current + " to " + next);
    }
    return next;
  }
}
