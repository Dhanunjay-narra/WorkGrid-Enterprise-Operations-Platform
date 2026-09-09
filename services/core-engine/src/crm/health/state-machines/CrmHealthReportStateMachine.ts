export type CrmHealthReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthReportStateMachine {
  private allowedTransitions: Record<CrmHealthReportState, CrmHealthReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthReportState, to: CrmHealthReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthReportState, to: CrmHealthReportState): CrmHealthReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthReport: " + from + " -> " + to);
    }
    return to;
  }
}
