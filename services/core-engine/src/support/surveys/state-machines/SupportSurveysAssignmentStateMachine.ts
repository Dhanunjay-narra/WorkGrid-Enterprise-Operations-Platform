export type SupportSurveysAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysAssignmentStateMachine {
  private allowedTransitions: Record<SupportSurveysAssignmentState, SupportSurveysAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysAssignmentState, to: SupportSurveysAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysAssignmentState, to: SupportSurveysAssignmentState): SupportSurveysAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
