export type SupportSurveysTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysTransactionStateMachine {
  private allowedTransitions: Record<SupportSurveysTransactionState, SupportSurveysTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysTransactionState, to: SupportSurveysTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysTransactionState, to: SupportSurveysTransactionState): SupportSurveysTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
