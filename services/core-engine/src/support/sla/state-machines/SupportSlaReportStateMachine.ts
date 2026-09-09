export type SupportSlaReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaReportStateMachine {
  private allowedTransitions: Record<SupportSlaReportState, SupportSlaReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaReportState, to: SupportSlaReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaReportState, to: SupportSlaReportState): SupportSlaReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaReport: " + from + " -> " + to);
    }
    return to;
  }
}
