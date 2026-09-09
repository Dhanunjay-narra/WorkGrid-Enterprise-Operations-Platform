export type TenancyReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyReportStateMachine {
  private allowedTransitions: Record<TenancyReportState, TenancyReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyReportState, to: TenancyReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyReportState, to: TenancyReportState): TenancyReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyReport: " + from + " -> " + to);
    }
    return to;
  }
}
