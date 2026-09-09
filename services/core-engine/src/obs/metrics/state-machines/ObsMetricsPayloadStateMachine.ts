export type ObsMetricsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsMetricsPayloadStateMachine {
  private allowedTransitions: Record<ObsMetricsPayloadState, ObsMetricsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsMetricsPayloadState, to: ObsMetricsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsMetricsPayloadState, to: ObsMetricsPayloadState): ObsMetricsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsMetricsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
