export type ObsProbesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesMetricStateMachine {
  private allowedTransitions: Record<ObsProbesMetricState, ObsProbesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesMetricState, to: ObsProbesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesMetricState, to: ObsProbesMetricState): ObsProbesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
