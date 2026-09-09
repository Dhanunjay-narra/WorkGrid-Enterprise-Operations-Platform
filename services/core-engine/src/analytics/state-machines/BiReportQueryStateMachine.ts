export type BiReportQueryState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class BiReportQueryStateMachine {
  private validTransitions: Record<BiReportQueryState, BiReportQueryState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: BiReportQueryState, next: BiReportQueryState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: BiReportQueryState, next: BiReportQueryState): BiReportQueryState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for BiReportQuery: from " + current + " to " + next);
    }
    return next;
  }
}
