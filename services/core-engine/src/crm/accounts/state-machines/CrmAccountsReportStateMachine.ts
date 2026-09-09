export type CrmAccountsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsReportStateMachine {
  private allowedTransitions: Record<CrmAccountsReportState, CrmAccountsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsReportState, to: CrmAccountsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsReportState, to: CrmAccountsReportState): CrmAccountsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsReport: " + from + " -> " + to);
    }
    return to;
  }
}
