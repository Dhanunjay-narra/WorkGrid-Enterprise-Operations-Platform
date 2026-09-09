export type ObsMetricsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsRecordStateMachine {
  private allowedTransitions: Record<ObsMetricsRecordState, ObsMetricsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsRecordState, to: ObsMetricsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsRecordState, to: ObsMetricsRecordState): ObsMetricsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
