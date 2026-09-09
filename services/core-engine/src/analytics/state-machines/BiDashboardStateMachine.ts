export type BiDashboardState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiDashboardStateMachine {
  private validTransitions: Record<BiDashboardState, BiDashboardState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiDashboardState, next: BiDashboardState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiDashboardState, next: BiDashboardState): BiDashboardState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiDashboard: from " + current + " to " + next);
    }
    return next;
  }
}
