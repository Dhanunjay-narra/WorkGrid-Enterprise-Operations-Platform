export type SupportSurveysItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysItemStateMachine {
  private allowedTransitions: Record<SupportSurveysItemState, SupportSurveysItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysItemState, to: SupportSurveysItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysItemState, to: SupportSurveysItemState): SupportSurveysItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysItem: " + from + " -> " + to);
    }
    return to;
  }
}
