export type CrmDealsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsReportStateMachine {
  private allowedTransitions: Record<CrmDealsReportState, CrmDealsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsReportState, to: CrmDealsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsReportState, to: CrmDealsReportState): CrmDealsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsReport: " + from + " -> " + to);
    }
    return to;
  }
}
