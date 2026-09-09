export type ObsMetricsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsEntryStateMachine {
  private allowedTransitions: Record<ObsMetricsEntryState, ObsMetricsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsEntryState, to: ObsMetricsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsEntryState, to: ObsMetricsEntryState): ObsMetricsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
