export type PrjIssueReportState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class PrjIssueReportStateMachine {
  private validTransitions: Record<PrjIssueReportState, PrjIssueReportState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: PrjIssueReportState, next: PrjIssueReportState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: PrjIssueReportState, next: PrjIssueReportState): PrjIssueReportState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for PrjIssueReport: from " + current + " to " + next);
    }
    return next;
  }
}
