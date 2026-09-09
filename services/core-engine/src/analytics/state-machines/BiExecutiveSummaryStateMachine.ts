export type BiExecutiveSummaryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiExecutiveSummaryStateMachine {
  private validTransitions: Record<BiExecutiveSummaryState, BiExecutiveSummaryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiExecutiveSummaryState, next: BiExecutiveSummaryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiExecutiveSummaryState, next: BiExecutiveSummaryState): BiExecutiveSummaryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiExecutiveSummary: from " + current + " to " + next);
    }
    return next;
  }
}
