export type SupportSurveysEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysEventStateMachine {
  private allowedTransitions: Record<SupportSurveysEventState, SupportSurveysEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysEventState, to: SupportSurveysEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysEventState, to: SupportSurveysEventState): SupportSurveysEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysEvent: " + from + " -> " + to);
    }
    return to;
  }
}
