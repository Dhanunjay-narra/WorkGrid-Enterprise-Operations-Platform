export type CrmNoteState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CrmNoteStateMachine {
  private validTransitions: Record<CrmNoteState, CrmNoteState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CrmNoteState, next: CrmNoteState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CrmNoteState, next: CrmNoteState): CrmNoteState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CrmNote: from " + current + " to " + next);
    }
    return next;
  }
}
