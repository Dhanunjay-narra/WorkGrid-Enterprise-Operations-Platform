export type SupSatisfactionReportState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupSatisfactionReportStateMachine {
  private validTransitions: Record<SupSatisfactionReportState, SupSatisfactionReportState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupSatisfactionReportState, next: SupSatisfactionReportState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupSatisfactionReportState, next: SupSatisfactionReportState): SupSatisfactionReportState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupSatisfactionReport: from " + current + " to " + next);
    }
    return next;
  }
}
