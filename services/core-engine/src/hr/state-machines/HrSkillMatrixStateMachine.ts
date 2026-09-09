export type HrSkillMatrixState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrSkillMatrixStateMachine {
  private validTransitions: Record<HrSkillMatrixState, HrSkillMatrixState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrSkillMatrixState, next: HrSkillMatrixState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrSkillMatrixState, next: HrSkillMatrixState): HrSkillMatrixState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrSkillMatrix: from " + current + " to " + next);
    }
    return next;
  }
}
