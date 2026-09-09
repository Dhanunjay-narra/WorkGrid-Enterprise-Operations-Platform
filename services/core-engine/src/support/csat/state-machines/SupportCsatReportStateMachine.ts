export type SupportCsatReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatReportStateMachine {
  private allowedTransitions: Record<SupportCsatReportState, SupportCsatReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatReportState, to: SupportCsatReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatReportState, to: SupportCsatReportState): SupportCsatReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatReport: " + from + " -> " + to);
    }
    return to;
  }
}
