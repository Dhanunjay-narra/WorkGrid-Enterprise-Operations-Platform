export type SupportSurveysEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysEntryStateMachine {
  private allowedTransitions: Record<SupportSurveysEntryState, SupportSurveysEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysEntryState, to: SupportSurveysEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysEntryState, to: SupportSurveysEntryState): SupportSurveysEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysEntry: " + from + " -> " + to);
    }
    return to;
  }
}
