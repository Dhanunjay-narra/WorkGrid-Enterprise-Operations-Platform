export type SupCustomerSurveyState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class SupCustomerSurveyStateMachine {
  private validTransitions: Record<SupCustomerSurveyState, SupCustomerSurveyState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: SupCustomerSurveyState, next: SupCustomerSurveyState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: SupCustomerSurveyState, next: SupCustomerSurveyState): SupCustomerSurveyState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for SupCustomerSurvey: from " + current + " to " + next);
    }
    return next;
  }
}
