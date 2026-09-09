export type FinJournalEntryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class FinJournalEntryStateMachine {
  private validTransitions: Record<FinJournalEntryState, FinJournalEntryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: FinJournalEntryState, next: FinJournalEntryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: FinJournalEntryState, next: FinJournalEntryState): FinJournalEntryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for FinJournalEntry: from " + current + " to " + next);
    }
    return next;
  }
}
