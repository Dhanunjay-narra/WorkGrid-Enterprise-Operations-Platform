export type SupportSurveysProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysProfileStateMachine {
  private allowedTransitions: Record<SupportSurveysProfileState, SupportSurveysProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysProfileState, to: SupportSurveysProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysProfileState, to: SupportSurveysProfileState): SupportSurveysProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysProfile: " + from + " -> " + to);
    }
    return to;
  }
}
