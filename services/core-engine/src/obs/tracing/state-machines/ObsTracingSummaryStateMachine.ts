export type ObsTracingSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingSummaryStateMachine {
  private allowedTransitions: Record<ObsTracingSummaryState, ObsTracingSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingSummaryState, to: ObsTracingSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingSummaryState, to: ObsTracingSummaryState): ObsTracingSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingSummary: " + from + " -> " + to);
    }
    return to;
  }
}
