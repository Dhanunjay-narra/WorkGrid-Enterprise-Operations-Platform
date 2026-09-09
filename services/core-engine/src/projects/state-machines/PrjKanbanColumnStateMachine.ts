export type PrjKanbanColumnState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjKanbanColumnStateMachine {
  private validTransitions: Record<PrjKanbanColumnState, PrjKanbanColumnState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjKanbanColumnState, next: PrjKanbanColumnState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjKanbanColumnState, next: PrjKanbanColumnState): PrjKanbanColumnState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjKanbanColumn: from " + current + " to " + next);
    }
    return next;
  }
}
