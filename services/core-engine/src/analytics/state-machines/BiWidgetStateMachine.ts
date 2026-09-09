export type BiWidgetState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiWidgetStateMachine {
  private validTransitions: Record<BiWidgetState, BiWidgetState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiWidgetState, next: BiWidgetState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiWidgetState, next: BiWidgetState): BiWidgetState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiWidget: from " + current + " to " + next);
    }
    return next;
  }
}
