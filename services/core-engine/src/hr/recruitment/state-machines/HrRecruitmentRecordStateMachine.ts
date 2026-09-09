export type HrRecruitmentRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentRecordStateMachine {
  private allowedTransitions: Record<HrRecruitmentRecordState, HrRecruitmentRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentRecordState, to: HrRecruitmentRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentRecordState, to: HrRecruitmentRecordState): HrRecruitmentRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentRecord: " + from + " -> " + to);
    }
    return to;
  }
}
