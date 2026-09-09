export type ObsSpansSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsSpansSummaryStateMachine {
  private allowedTransitions: Record<ObsSpansSummaryState, ObsSpansSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsSpansSummaryState, to: ObsSpansSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsSpansSummaryState, to: ObsSpansSummaryState): ObsSpansSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsSpansSummary: " + from + " -> " + to);
    }
    return to;
  }
}
