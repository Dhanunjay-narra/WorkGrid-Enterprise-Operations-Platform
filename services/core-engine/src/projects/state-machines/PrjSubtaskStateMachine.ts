export type PrjSubtaskState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjSubtaskStateMachine {
  private validTransitions: Record<PrjSubtaskState, PrjSubtaskState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjSubtaskState, next: PrjSubtaskState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjSubtaskState, next: PrjSubtaskState): PrjSubtaskState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjSubtask: from " + current + " to " + next);
    }
    return next;
  }
}
