export type HrRecruitmentPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrRecruitmentPayloadStateMachine {
  private allowedTransitions: Record<HrRecruitmentPayloadState, HrRecruitmentPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrRecruitmentPayloadState, to: HrRecruitmentPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrRecruitmentPayloadState, to: HrRecruitmentPayloadState): HrRecruitmentPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrRecruitmentPayload: " + from + " -> " + to);
    }
    return to;
  }
}
