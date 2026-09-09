export type CrmContactsReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsReportStateMachine {
  private allowedTransitions: Record<CrmContactsReportState, CrmContactsReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsReportState, to: CrmContactsReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsReportState, to: CrmContactsReportState): CrmContactsReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsReport: " + from + " -> " + to);
    }
    return to;
  }
}
