export type SupportSurveysReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysReportStateMachine {
  private allowedTransitions: Record<SupportSurveysReportState, SupportSurveysReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysReportState, to: SupportSurveysReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysReportState, to: SupportSurveysReportState): SupportSurveysReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysReport: " + from + " -> " + to);
    }
    return to;
  }
}
