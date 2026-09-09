export type ObsLoggingSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsLoggingSummaryStateMachine {
  private allowedTransitions: Record<ObsLoggingSummaryState, ObsLoggingSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsLoggingSummaryState, to: ObsLoggingSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsLoggingSummaryState, to: ObsLoggingSummaryState): ObsLoggingSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsLoggingSummary: " + from + " -> " + to);
    }
    return to;
  }
}
