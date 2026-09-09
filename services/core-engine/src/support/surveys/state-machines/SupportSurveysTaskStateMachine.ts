export type SupportSurveysTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysTaskStateMachine {
  private allowedTransitions: Record<SupportSurveysTaskState, SupportSurveysTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysTaskState, to: SupportSurveysTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysTaskState, to: SupportSurveysTaskState): SupportSurveysTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysTask: " + from + " -> " + to);
    }
    return to;
  }
}
