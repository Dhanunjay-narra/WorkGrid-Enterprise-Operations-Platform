export type ObsProbesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesSummaryStateMachine {
  private allowedTransitions: Record<ObsProbesSummaryState, ObsProbesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesSummaryState, to: ObsProbesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesSummaryState, to: ObsProbesSummaryState): ObsProbesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
