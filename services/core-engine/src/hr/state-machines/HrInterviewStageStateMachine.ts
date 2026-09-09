export type HrInterviewStageState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrInterviewStageStateMachine {
  private validTransitions: Record<HrInterviewStageState, HrInterviewStageState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrInterviewStageState, next: HrInterviewStageState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrInterviewStageState, next: HrInterviewStageState): HrInterviewStageState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrInterviewStage: from " + current + " to " + next);
    }
    return next;
  }
}
