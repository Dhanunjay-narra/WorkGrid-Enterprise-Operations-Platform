export type HrDesignationState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrDesignationStateMachine {
  private validTransitions: Record<HrDesignationState, HrDesignationState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrDesignationState, next: HrDesignationState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrDesignationState, next: HrDesignationState): HrDesignationState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrDesignation: from " + current + " to " + next);
    }
    return next;
  }
}
