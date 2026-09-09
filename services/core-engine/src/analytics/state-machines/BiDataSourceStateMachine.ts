export type BiDataSourceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiDataSourceStateMachine {
  private validTransitions: Record<BiDataSourceState, BiDataSourceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiDataSourceState, next: BiDataSourceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiDataSourceState, next: BiDataSourceState): BiDataSourceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiDataSource: from " + current + " to " + next);
    }
    return next;
  }
}
