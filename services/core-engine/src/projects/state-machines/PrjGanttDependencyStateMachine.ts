export type PrjGanttDependencyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjGanttDependencyStateMachine {
  private validTransitions: Record<PrjGanttDependencyState, PrjGanttDependencyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjGanttDependencyState, next: PrjGanttDependencyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjGanttDependencyState, next: PrjGanttDependencyState): PrjGanttDependencyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjGanttDependency: from " + current + " to " + next);
    }
    return next;
  }
}
