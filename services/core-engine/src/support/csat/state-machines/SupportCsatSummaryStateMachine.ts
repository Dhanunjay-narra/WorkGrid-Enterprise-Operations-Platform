export type SupportCsatSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatSummaryStateMachine {
  private allowedTransitions: Record<SupportCsatSummaryState, SupportCsatSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatSummaryState, to: SupportCsatSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatSummaryState, to: SupportCsatSummaryState): SupportCsatSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatSummary: " + from + " -> " + to);
    }
    return to;
  }
}
