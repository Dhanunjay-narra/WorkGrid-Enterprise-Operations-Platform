export type HrRecruitmentScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentScheduleStateMachine {
  private allowedTransitions: Record<HrRecruitmentScheduleState, HrRecruitmentScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentScheduleState, to: HrRecruitmentScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentScheduleState, to: HrRecruitmentScheduleState): HrRecruitmentScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
