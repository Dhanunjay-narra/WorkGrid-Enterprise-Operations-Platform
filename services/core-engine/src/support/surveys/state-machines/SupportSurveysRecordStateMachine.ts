export type SupportSurveysRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysRecordStateMachine {
  private allowedTransitions: Record<SupportSurveysRecordState, SupportSurveysRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysRecordState, to: SupportSurveysRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysRecordState, to: SupportSurveysRecordState): SupportSurveysRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysRecord: " + from + " -> " + to);
    }
    return to;
  }
}
