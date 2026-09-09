export type HrRecruitmentReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentReportStateMachine {
  private allowedTransitions: Record<HrRecruitmentReportState, HrRecruitmentReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentReportState, to: HrRecruitmentReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentReportState, to: HrRecruitmentReportState): HrRecruitmentReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentReport: " + from + " -> " + to);
    }
    return to;
  }
}
