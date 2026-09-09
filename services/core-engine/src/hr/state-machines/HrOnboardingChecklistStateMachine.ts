export type HrOnboardingChecklistState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class HrOnboardingChecklistStateMachine {
  private validTransitions: Record<HrOnboardingChecklistState, HrOnboardingChecklistState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: HrOnboardingChecklistState, next: HrOnboardingChecklistState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: HrOnboardingChecklistState, next: HrOnboardingChecklistState): HrOnboardingChecklistState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for HrOnboardingChecklist: from " + current + " to " + next);
    }
    return next;
  }
}
